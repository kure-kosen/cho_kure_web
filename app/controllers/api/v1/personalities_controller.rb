class Api::V1::PersonalitiesController < Api::V1::BaseController
  def index
    render json: Personality.on_public
  end

  def show
    render json: Personality.find(params[:id])
  end
end
