class Api::V1::PersonalitiesController < Api::V1::BaseController
  before_action :set_personality, only: %i[show]

  def index
    render json: Personality.appeared.includes(:radios, :taggings)
  end

  def new_radios
    render json: Radio.where(
      id: RadioPersonality.where(personality_id: params[:id]).select(:radio_id),
    ).published.order(published_at: :desc).includes(personalities: :taggings).take(5)
  end

  def appeared
    render json: Personality.appeared.includes(:radios, :taggings)
  end

  def regular
    render json: Personality.regular.includes(:radios, :taggings)
  end

  def new_face
    render json: Personality.new_face.includes(:radios, :taggings)
  end

  def show
    render json: @personality
  end

  private

    def set_personality
      @personality = Personality.find(params[:id])
    end
end
