class Api::V1::RadiosController < Api::V1::BaseController
  def index
    render json: Radio.all
  end

  def show
    render json: Radio.find(params[:id])
  end
end
