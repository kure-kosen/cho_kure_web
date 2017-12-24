class Api::V1::RadiosController < Api::V1::BaseController
  def index
    if params[:personality_id]
      personality = Personality.find(params[:personality_id])
      render json: personality.radios.published.order(published_at: :desc).take(5)
    else
      render json: Radio.published.order(published_at: :desc)
    end
  end

  def show
    render json: Radio.find(params[:id])
  end
end
