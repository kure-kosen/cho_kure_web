class Api::V1::PersonalitiesController < Api::V1::BaseController
  before_action :set_peresonality, only: %i[show]

  def index
    render json: Personality.on_public.includes(:radios, :taggings)
  end

  def new_radios
    render json: Radio.where(
      id: RadioPersonality.where(personality_id: params[:id]).select(:radio_id),
    ).published.order(published_at: :desc).includes(personalities: :taggings).take(5)
  end

  def show
    render json: @personality
  end

  private

    def set_peresonality
      @personality = Personality.find(params[:id])
    end
end
