class Admin::BaseController < ApplicationController
  before_action :authenticate_personality!

  layout "admin"
end
