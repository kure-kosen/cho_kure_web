class RedirectWebpackDevController < ApplicationController
  def index
    redirect_to request.url.gsub(":3000", ":5000")
  end
end
