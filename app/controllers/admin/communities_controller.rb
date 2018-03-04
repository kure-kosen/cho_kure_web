class Admin::CommunitiesController < Admin::BaseController
  before_action :set_community, only: [:show, :edit, :update, :destroy]
  before_action :set_tag_list, only: [:new, :edit]
  before_action :check_authorize

  # GET /communities
  # GET /communities.json
  def index
    @communities = Community.all.includes(:taggings)
  end

  # GET /communities/1
  # GET /communities/1.json
  def show
  end

  # GET /communities/new
  def new
    @community = Community.new
  end

  # GET /communities/1/edit
  def edit
  end

  # POST /communities
  # POST /communities.json
  def create
    @community = Community.new(community_params)

    if @community.save
      redirect_to admin_communities_url(@community), notice: "コミュニティを作成しました。"
    else
      render :new
    end
  end

  # PATCH/PUT /communities/1
  # PATCH/PUT /communities/1.json
  def update
    if @community.update(community_params)
      redirect_to admin_community_path(@community), notice: "コミュニティを更新しました。"
    else
      render :edit
    end
  end

  # DELETE /communities/1
  # DELETE /communities/1.json
  def destroy
    @community.destroy!
    redirect_to admin_communities_url, notice: "コミュニティを削除しました。"
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_community
      @community = Community.find(params[:id])
    end

    def set_tag_list
      @tag_list = Community.tags_on(:tags).pluck(:name)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def community_params
      params.require(:community).permit(:name, :url, :description, :logo, :tag_list)
    end

    def check_authorize
      return authorize [:admin, @community] if @community.present?
      authorize [:admin, :community]
    end
end
