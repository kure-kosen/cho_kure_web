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
    @radio.published_at = published_at_from(
      params[:radio][:status],
      Time.zone.local(
        params[:radio]["published_at(1i)"].to_i,
        params[:radio]["published_at(2i)"].to_i,
        params[:radio]["published_at(3i)"].to_i,
        params[:radio]["published_at(4i)"].to_i,
        params[:radio]["published_at(5i)"].to_i,
      ),
    )

    if @radio.save
      redirect_to admin_radio_path(@radio), notice: "Radio was successfully created."
    else
      render :new
    end
  end

  # PATCH/PUT /radios/1
  def update
    @radio.published_at = published_at_from(
      params[:radio][:status],
      Time.zone.local(
        params[:radio]["published_at(1i)"].to_i,
        params[:radio]["published_at(2i)"].to_i,
        params[:radio]["published_at(3i)"].to_i,
        params[:radio]["published_at(4i)"].to_i,
        params[:radio]["published_at(5i)"].to_i,
      ),
    )
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

    def published_at_from(status, datetime = nil)
      case status
      when "publish"
        Time.zone.now
      when "reservation"
        datetime
      when "draft"
        nil
      else
        nil
      end
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_radio
      @radio = Radio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def radio_params
      params.require(:radio).permit(
        :title,
        :image,
        :description,
        :mp3,
        :youtube_url,
        :podcast_url,
        community_ids: [],
        personality_ids: [],
      )
    end
end
