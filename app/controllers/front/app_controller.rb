class Front::AppController < Front::BaseController
  def index
    render layout: false
  end
end
