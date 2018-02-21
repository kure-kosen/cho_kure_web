class Admin::ArticlesController < Admin::BaseController
  before_action :set_article, only: [:show, :edit, :update, :destroy, :autosave]
  before_action :check_authorize

  def index
    @articles = Article.all.includes(:writer)
  end

  def show
  end

  def new
    @article = Article.new(writer: current_personality)
    @article.save!
  end

  def edit
    if (@article.autosave_content&.size || 0) > (@article.content&.size || 0)
      @article.content = @article.autosave_content
      @article.autosave_content = nil
    end
  end

  def update
    @article.autosave_content = nil
    @article.published_at = published_at_from(
      params[:article][:status],
      Time.zone.parse(
        datetime_select_to_a(params[:article], :reserve_time).join,
      ),
    )

    if @article.update(article_params)
      redirect_to admin_articles_url(@article), notice: "記事を更新しました。"
    else
      render :edit
    end
  end

  def destroy
    @article.destroy!
    redirect_to admin_articles_url, notice: "記事を削除しました。"
  end

  def autosave
    begin
      unless @article.autosave_content == params[:autosave_content]
        @article.update!(autosave_content: params[:autosave_content])
      end
    rescue
      head :internal_server_error
      return
    end

    head :no_content
  end

  def upload_image
    response = {}
    begin
      file = params[:file].tempfile
      path = "s3_uploader/articles/#{SecureRandom.uuid}_#{params[:file].original_filename}"
      response[:filename] = S3Uploader.upload(file: file, path: path)
    rescue
      response[:error] = "Error while uploading file"
    end

    render json: response.to_json
  end

  private

    def set_article
      @article = Article.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :content, :published_at)
    end

    def check_authorize
      return authorize [:admin, @article] if @article.present?
      authorize [:admin, :article]
    end
end
