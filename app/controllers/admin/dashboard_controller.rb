class Admin::DashboardController < Admin::BaseController
  before_action :check_authorize

  def index
  end

  private
    def check_authorize
      authorize [:admin, :dashboard]
    end
end
