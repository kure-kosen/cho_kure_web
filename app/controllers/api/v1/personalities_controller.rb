class Api::V1::PersonalitiesController < Api::V1::BaseController
  before_action :set_peresonality, only: %i[new_radios show]

  def index
    render json: Personality.on_public.includes(:radios, :taggings)
  end

  def new_radios
    render json: @personality.radios.published.order(published_at: :desc).take(5)
  end

  def show
    render json: @personality
  end

  private

    def set_peresonality
      @personality = Personality.find(params[:id])
    end
end
