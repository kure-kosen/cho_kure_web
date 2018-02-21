class Admin::ArticlesController < Admin::BaseController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :check_authorize

  def index
    @articles = Article.all
  end

  def show
  end

  def new
    @article = Article.new
  end

  def edit
  end

  def create
    @article = Article.new(article_params)
    @article.author = current_personality

    if @article.save
      redirect_to admin_articles_url(@article), notice: "記事を作成しました。"
    else
      render :new
    end
  end

  def update
    if @article.update(article_params)
      redirect_to admin_article_path(@article), notice: "記事を更新しました。"
    else
      render :edit
    end
  end

  def destroy
    @article.destroy!
    redirect_to admin_articles_url, notice: "記事を削除しました。"
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
      params.require(:article).permit(:title, :content, :autosave_content, :published_at)
    end

    def check_authorize
      return authorize [:admin, @article] if @article.present?
      authorize [:admin, :article]
    end
end
