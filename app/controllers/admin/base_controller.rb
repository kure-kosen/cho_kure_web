class Admin::BaseController < ApplicationController
  include Pundit

  before_action :authenticate_personality!
  after_action :verify_authorized

  layout "admin"

  private

    def datetime_select_to_a(param, column)
      param.select { |k, _v| k.match(/#{column}\(\di\)/) }.values.map { |i| "%02d" % i }
    end

    def published_at_from(status, datetime = nil)
      case status
      when "publish"
        Time.zone.now
      when "reservation"
        datetime
      when "draft"
        nil
      else
        nil
      end
    end

    def pundit_user
      current_personality
    end
end
