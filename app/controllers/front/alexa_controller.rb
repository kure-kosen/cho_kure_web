class Front::AlexaController < Front::BaseController
  def index
    render json: Api::Alexa.new(Radio.all)
  end
end
