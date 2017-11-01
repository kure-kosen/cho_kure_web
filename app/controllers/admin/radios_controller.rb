class Admin::RadiosController < ApplicationController
  before_action :set_radio, only: [:show, :edit, :update, :destroy]

  # GET /radios
  # GET /radios.json
  def index
    @radios = Radio.all
  end

  # GET /radios/1
  # GET /radios/1.json
  def show
  end

  # GET /radios/new
  def new
    @radio = Radio.new
  end

  # GET /radios/1/edit
  def edit
  end

  # POST /radios
  # POST /radios.json
  def create
    @radio = Radio.new(radio_params)

    respond_to do |format|
      if @radio.save
        format.html { redirect_to @radio, notice: 'Radio was successfully created.' }
        format.json { render :show, status: :created, location: @radio }
      else
        format.html { render :new }
        format.json { render json: @radio.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /radios/1
  # PATCH/PUT /radios/1.json
  def update
    respond_to do |format|
      if @radio.update(radio_params)
        format.html { redirect_to @radio, notice: 'Radio was successfully updated.' }
        format.json { render :show, status: :ok, location: @radio }
      else
        format.html { render :edit }
        format.json { render json: @radio.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /radios/1
  # DELETE /radios/1.json
  def destroy
    @radio.destroy
    respond_to do |format|
      format.html { redirect_to radios_url, notice: 'Radio was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_radio
      @radio = Radio.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def radio_params
      params.fetch(:radio, {})
    end
end
