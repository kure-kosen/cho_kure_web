class Admin::BaseViewObject
  class << self
    include ActionView::Helpers
    include ActionView::Context
    include Rails.application.routes.url_helpers
  end
end
