class Api::V1::EventsController < Api::V1::BaseController
  def index
    render json: Event.all
  end

  def show
    render json: Event.find(params[:id])
  end
end
