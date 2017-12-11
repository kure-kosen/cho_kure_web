# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = ENV.fetch("EC2_PRODUCTION_PROTOCOL") { "" } + "://" + ENV.fetch("EC2_PRODUCTION_HOST") { "" }

# TODO: リリースできるタイミングにもう一度見直す
SitemapGenerator::Sitemap.create do
  # Add '/personalities'
  add "/personalities", priority: 0.7, changefreq: "daily"

  # Add all personalities:
  Personality.all.each do |personality|
    add "/personalities/#{personality.id}", lastmod: personality.updated_at
  end

  # Add '/communities'
  add "/communities", priority: 0.7, changefreq: "daily"

  # Add all personalities:
  Community.all.each do |community|
    add "/communities/#{community.id}", lastmod: community.updated_at
  end

  # Add '/events'
  add "/events", priority: 0.7, changefreq: "daily"

  # Add all personalities:
  Event.all.each do |event|
    add "/events/#{event.id}", lastmod: event.updated_at
  end

  # Add '/radios'
  add "/radios", priority: 0.7, changefreq: "daily"

  # Add all personalities:
  Radio.published.each do |radio|
    add "/radios/#{radio.id}", lastmod: radio.updated_at
  end

  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  # Add '/articles'
  #
  #   add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end
end
