class Admin::ArticlesController < Admin::BaseController
  before_action :check_authorize

  def upload_image
    response = {}
    begin
      file = params[:file].tempfile
      path = "s3_uploader/articles/#{SecureRandom.uuid}_#{params[:file].original_filename}"
      response[:filename] = S3Uploader.upload(file: file, path: path)
    rescue
      response[:error] = 'Error while uploading file'
    end

    render json: response.to_json
  end

  private

    def check_authorize
      return authorize [:admin, @article] if @article.present?
      authorize [:admin, :article]
    end
end
