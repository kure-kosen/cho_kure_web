class Admin::BaseController < ApplicationController
  include Pundit

  before_action :authenticate_personality!
  after_action :verify_authorized

  layout "admin"

  private

    def datetime_select_to_a(param, column)
      param.select { |k, _v| k.match(/#{column}\(\di\)/) }.values
    end

    def pundit_user
      current_personality
    end
end
