module ApplicationHelper
  def webpack_javascript_include_tag(path)
    path = "#{path}.js" unless path.ends_with?(".js")
    host = ENV["USE_IP_ADDRESS"].to_b ? ENV["IP_ADDRESS"] : "localhost"
    path = ENV["USE_WEBPACK_DEV_SERVER"].to_b ? "http://#{host}:5000/#{path}" : "/assets/build/#{find_hash_name(path)}"
    javascript_include_tag(path)
  end

  def find_hash_name(path)
    manifest = Rails.application.config.assets_manifest
    manifest[path] if manifest && manifest[path].present?
  end
end
