class Api::V1::PersonalitiesController < Api::V1::BaseController
  def index
    render json: Personality.on_public
  end

  def new_radios
    personality = Personality.find(params[:id])
    render json: personality.radios.published.order(published_at: :desc).take(5)
  end

  def show
    render json: Personality.find(params[:id])
  end
end
