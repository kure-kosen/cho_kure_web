module Publishable
  extend ActiveSupport::Concern

  included do
    include InstanceMethod
  end

  module InstanceMethod
    def publish?
      !published_at.nil? && published_at <= Time.zone.now
    end

    def reservation?
      !published_at.nil? && published_at > Time.zone.now
    end

    def draft?
      published_at.nil?
    end
  end
end
