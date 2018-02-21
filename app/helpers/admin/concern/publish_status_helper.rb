module Admin::Concern::PublishStatusHelper
  extend ActiveSupport::Concern

  included do
    include InstanceMethod
  end

  module InstanceMethod
    def status_badge(record)
      content_tag(:span, class: "badge badge-primary") do
        if record.publish?
          "公開"
        elsif record.reservation?
          "予約投稿"
        elsif record.draft?
          "下書き"
        end
      end
    end
  end
end
