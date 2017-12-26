class Admin::RadiosController < Admin::BaseController
  before_action :set_radio, only: [:show, :edit, :update, :destroy]
  before_action :check_authorize

  # GET /radios
  def index
    @radios = policy_scope([:admin, Radio])
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
      Time.zone.parse(
        datetime_select_to_a(params[:radio], :reserve_time).join,
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
      Time.zone.parse(
        datetime_select_to_a(params[:radio], :reserve_time).join,
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
        community_ids: [],
        personality_ids: [],
      )
    end

    def check_authorize
      return authorize [:admin, @radio] if @radio.present?
      authorize [:admin, :radio]
    end
end
