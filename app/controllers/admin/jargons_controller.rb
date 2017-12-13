class Admin::JargonsController < ApplicationController
  before_action :set_jargon, only: [:show, :edit, :update, :destroy]

  # GET /jargons
  # GET /jargons.json
  def index
    @jargons = Jargon.all
  end

  # GET /jargons/1
  # GET /jargons/1.json
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
  # POST /jargons.json
  def create
    @jargon = Jargon.new(jargon_params)

    respond_to do |format|
      if @jargon.save
        format.html { redirect_to @jargon, notice: "Jargon was successfully created." }
        format.json { render :show, status: :created, location: @jargon }
      else
        format.html { render :new }
        format.json { render json: @jargon.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /jargons/1
  # PATCH/PUT /jargons/1.json
  def update
    respond_to do |format|
      if @jargon.update(jargon_params)
        format.html { redirect_to @jargon, notice: "Jargon was successfully updated." }
        format.json { render :show, status: :ok, location: @jargon }
      else
        format.html { render :edit }
        format.json { render json: @jargon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /jargons/1
  # DELETE /jargons/1.json
  def destroy
    @jargon.destroy!
    respond_to do |format|
      format.html { redirect_to jargons_url, notice: "Jargon was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_jargon
      @jargon = Jargon.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jargon_params
      params.fetch(:jargon, {})
    end
end
