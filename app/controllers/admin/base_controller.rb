class Admin::BaseController < ApplicationController
  include Pundit

  before_action :authenticate_personality!

  layout "admin"

  private

    def datetime_select_to_a(param, column)
      param.select { |k, _v| k.match(/#{column}\(\di\)/) }.values
    end
end
