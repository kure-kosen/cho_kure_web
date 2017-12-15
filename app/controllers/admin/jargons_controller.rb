class Admin::JargonsController < ApplicationController
  before_action :set_jargon, only: [:show, :edit, :update, :destroy]

  # GET /jargons
  def index
    @jargons = Jargon.all
  end

  # GET /jargons/1
  def show
  end

  # GET /jargons/new
  def new
    @jargon = Jargon.new
  end

  # GET /jargons/1/edit
  def edit
  end

  # POST /jargons
  def create
    @jargon = Jargon.new(jargon_params)

    if @jargon.save
      redirect_to admin_jargon_path(@jargon), notice: "Jargon was successfully created"
    else
      render :new
    end
  end

  # PATCH/PUT /jargons/1
  def update
    if @jargon.update(jargon_params)
      redirect_to admin_jargon_path(@jargon), notice: "Jargon was successfully updated"
    else
      render :edit
    end
  end

  # DELETE /jargons/1
  def destroy
    @jargon.destroy!
    redirect_to admin_jargons_url, notice: "Jargon was successfully destroyed"
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_jargon
      @jargon = Jargon.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jargon_params
      params.require(:jargon).permit(:name, :desctiption, :radio_id, :major)
    end
end
