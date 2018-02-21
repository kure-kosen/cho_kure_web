class S3Uploader
  @@bucket = Aws::S3::Resource.new(
    region: "ap-northeast-1",
    access_key_id: ENV["S3_ACCESS_KEY_ID"],
    secret_access_key: ENV["S3_SECRET_KEY_ID"],
  ).bucket(ENV["S3_BUCKET_NAME"])

  class << self
    def upload(file:, path:)
      object = @@bucket.object(path)
      object.put(acl: "public-read", body: file)
      object.public_url
    end
  end
end
