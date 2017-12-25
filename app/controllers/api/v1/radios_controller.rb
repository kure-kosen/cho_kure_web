class Api::V1::RadiosController < Api::V1::BaseController
  def index
    render json: Radio.published.order(published_at: :desc)
  end

  def new_radios
    personality = Personality.find(params[:id])
    render json: personality.radios.published.order(published_at: :desc).take(5)
  end

  def show
    render json: Radio.find(params[:id])
  end
end
