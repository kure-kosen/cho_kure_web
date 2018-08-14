class Api::V1::RadiosController < Api::V1::BaseController
  def index
    render json: Radio.published.order(published_at: :desc).
                   includes(
                     :personalities,
                     :comic,
                     radio_personalities: { personality: :taggings },
                   )
  end

  def show
    render json: Radio.includes({ personalities: :taggings }, :comic).find(params[:id])
  end
end
