class Admin::CommunitiesController < Admin::BaseController
  before_action :set_community, only: [:show, :edit, :update, :destroy]

  # GET /communities
  # GET /communities.json
  def index
    @communities = Community.all
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
      redirect_to admin_communities_url(@community), notice: "Community was successfully created."
    else
      render :new
    end
  end

  # PATCH/PUT /communities/1
  # PATCH/PUT /communities/1.json
  def update
    if @community.update(community_params)
      redirect_to admin_community_path(@community), notice: "Community was successfully updated."
    else
      render :edit
    end
  end

  # DELETE /communities/1
  # DELETE /communities/1.json
  def destroy
    @community.destroy!
    redirect_to admin_communities_url, notice: "Community was successfully destroyed."
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_community
      @community = Community.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def community_params
      params.require(:community).permit(:name, :url, :description)
    end
end
