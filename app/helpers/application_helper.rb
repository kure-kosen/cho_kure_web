module ApplicationHelper
  def webpack_javascript_include_tag(path)
    path = "#{path}.js" unless path.ends_with?('.js')
    path = if ENV["USE_WEBPACK_DEV_SERVER"].to_b
      "/assets/build/#{path}"
    else
      # TODO(euglena1215): implementation for production
      "/assets/build/#{path}"
    end

    javascript_include_tag(path)
  end
end
