class Api::V1::CommunitiesController < Api::V1::BaseController
  def index
    render json: Community.all
  end

  def show
    render json: Community.find(params[:id])
  end
end
