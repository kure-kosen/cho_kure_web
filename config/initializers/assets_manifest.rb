Rails.application.config.assets_manifest =
  if File.exist?(Rails.root.join("public", "assets", "build", "manifest.json"))
    JSON.parse(File.read(Rails.root.join("public", "assets", "build", "manifest.json")))
  else
    raise "\n
      +--------------------------------------------------+
      | public/assets/build/manifest.jsonが存在しません. |
      | $ yarn build を実行してください.                 |
      +--------------------------------------------------+
    "
  end
