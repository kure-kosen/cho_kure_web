class Api::V1::JargonsController < Api::V1::BaseController
  def index
    render json: Jargon.all
  end

  def show
    render json: Jargon.find(params[:id])
  end
end
