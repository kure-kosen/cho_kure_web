require "carrierwave/storage/abstract"
require "carrierwave/storage/file"
require "carrierwave/storage/fog"

if Rails.env.production?
  # 本番・ステージング環境はS3にUP
  CarrierWave.configure do |config|
    config.storage = :fog
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["S3_ACCESS_KEY_ID"],
      aws_secret_access_key: ENV["S3_SECRET_KEY_ID"],
      region: "ap-northeast-1",
    }

    config.fog_directory = ENV["S3_BUCKET_NAME"]
    config.fog_public = true
  end
else
  # それ以外はローカルに保持
  CarrierWave.configure do |config|
    config.storage = :file
  end
end
