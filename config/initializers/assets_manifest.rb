Rails.application.config.assets_manifest =
  unless Rails.env.test?
    if File.exist?(Rails.root.join("public", "assets", "build", "manifest.json"))
      JSON.parse(File.read(Rails.root.join("public", "assets", "build", "manifest.json")))
    else
      unless ENV["USE_WEBPACK_DEV_SERVER"].to_b
        raise "\n
          +--------------------------------------------------+
          | public/assets/build/manifest.jsonが存在しません. |
          | $ yarn build を実行してください.                 |
          +--------------------------------------------------+
        "
      end
    end
  end
