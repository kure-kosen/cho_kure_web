class Admin::RadiosController < Admin::BaseController
  before_action :set_radio, only: [:show, :edit, :update, :destroy]

  # GET /radios
  def index
    @radios = Radio.all
  end

  # GET /radios/1
  def show
  end

  # GET /radios/new
  def new
    @radio = Radio.new
  end

  # GET /radios/1/edit
  def edit
  end

  # POST /radios
  def create
    @radio = Radio.new(radio_params)

    if @radio.save
      redirect_to admin_radio_path(@radio), notice: "Radio was successfully created."
    else
      render :new
    end
  end

  # PATCH/PUT /radios/1
  def update
    if @radio.update(radio_params)
      redirect_to admin_radio_path(@radio), notice: "Radio was successfully updated."
    else
      render :edit
    end
  end

  # DELETE /radios/1
  def destroy
    @radio.destroy!
    redirect_to admin_radios_url, notice: "Radio was successfully destroyed."
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_radio
      @radio = Radio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def radio_params
      params.require(:radio).permit(:title, :description, :mp3, :duration, :size, :youtube_url, :podcast_url, :published_at, community_ids: [])
    end
end
