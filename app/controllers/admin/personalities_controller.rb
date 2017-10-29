class Admin::PersonalitiesController < Admin::BaseController
  before_action :set_personality, only: [:show, :edit, :update, :destroy]

  # GET /personalities
  # GET /personalities.json
  def index
    @personalities = Personality.all
  end

  # GET /personalities/1
  # GET /personalities/1.json
  def show
  end

  # GET /personalities/1/edit
  def edit
  end

  # PATCH/PUT /personalities/1
  # PATCH/PUT /personalities/1.json
  def update
    if @personality.update(personality_params)
      redirect_to admin_personality_path(@personality), notice: "Personality was successfully updated."
    else
      render :edit
    end
  end

  # DELETE /personalities/1
  # DELETE /personalities/1.json
  def destroy
    @personality.destroy!
    redirect_to admin_personality_url, notice: "Personality was successfully destroyed."
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_personality
      @personality = Personality.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def personality_params
      params.require(:personality).permit(:name, :description, :role)
    end
end
