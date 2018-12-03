module ApplicationHelper
  def webpack_javascript_include_tag(path)
    path = "#{path}.js" unless path.ends_with?(".js")
    path = assets_path(path)
    path = if ENV["USE_WEBPACK_DEV_SERVER"].to_b
             "http://localhost:5000/#{path}"
           else
             "/assets/build/#{path}"
           end

    javascript_include_tag(assets_path(path))
  end

  def assets_path(path)
    return path if ENV["USE_WEBPACK_DEV_SERVER"].to_b

    manifest = Rails.application.config.assets_manifest
    (manifest && manifest[path].present?) ? manifest[path] : path
  end
end
