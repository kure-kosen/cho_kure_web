# config valid for current version and patch releases of Capistrano
lock "~> 3.10.0"

set :application, "cho_kure_web"
set :repo_url, "git@github.com:kure-kosen/cho_kure_web.git"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/var/www/cho_kure_web"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"
set :linked_files, fetch(:linked_files, []).push(".env", "public/sitemap.xml.gz")

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"
set :linked_dirs, fetch(:linked_dirs, []).push("log", "tmp/pids", "tmp/cache", "tmp/sockets", "vendor/bundle", "public/system", "node_modules")

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

set :yarn_target_path, -> { release_path.join("frontend/") }
set :yarn_flags, ""

set :rbenv_ruby, "2.4.2"

set :log_level, :debug

namespace :deploy do
  desc "Restart application"
  task :restart do
    invoke "unicorn:restart"
  end

  desc "Create database"
  task :db_create do
    on roles(:db) do |_host|
      with rails_env: fetch(:rails_env) do
        within current_path do
          execute :bundle, :exec, :rake, "db:create"
        end
      end
    end
  end

  desc "Run seed"
  task :seed_fu do
    on roles(:app) do
      with rails_env: fetch(:rails_env) do
        within current_path do
          execute :bundle, :exec, :rake, "db:seed_fu"
        end
      end
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
    end
  end

  task :cleanup do
    on roles(:app) do
      execute <<-COMMAND
        curl -X POST --data-urlencode \
          \"payload={ \
            \\\"channel\\\": \\\"#team-web_ウェブ開発\\\", \
            \\\"username\\\": \\\"onigiri\\\", \
            \\\"text\\\": \\\"#{fetch(:branch)}ブランチの#{fetch(:rails_env)}へのデプロイを完了したよ！\\\", \
            \\\"icon_emoji\\\": \\\":onigirikun:\\\"\
          }\" \
        https://hooks.slack.com/services/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
      COMMAND
    end
  end
end

namespace :webpack do
  desc "Build Frontend"
  after "yarn:install", "webpack:build"
  task :build do
    on roles(:app) do
      execute "cd #{fetch :yarn_target_path} && yarn build"
    end
  end
end
