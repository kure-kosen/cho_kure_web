module ApplicationHelper
  def webpack_javascript_include_tag(path)
    path = "#{path}.js" unless path.ends_with?(".js")
    path = if ENV["USE_WEBPACK_DEV_SERVER"].to_b
             "http://localhost:5000/#{path}"
           else
             "/assets/build/#{find_hash_name(path)}"
           end

    javascript_include_tag(path)
  end

  def find_hash_name(path)
    manifest = Rails.application.config.assets_manifest
    manifest[path] if (manifest && manifest[path].present?)
  end
end
