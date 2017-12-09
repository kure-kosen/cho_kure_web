class Api::V1::PersonalitiesController < ApplicationController
  def index
    render json: Personality.all
  end

  def show
    render json: Personality.find(params[:id])
  end
end
