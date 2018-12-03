Rails.application.config.assets_manifest =
  if File.exist?(Rails.root.join('public', 'assets', 'build', 'manifest.json'))
    JSON.parse(File.read(Rails.root.join('public', 'assets', 'build', 'manifest.json')))
  end
