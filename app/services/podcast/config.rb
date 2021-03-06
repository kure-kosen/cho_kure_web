module Podcast
  class Config
    attr_reader :podcast_name,
                :podcast_sub_name,
                :podcast_summary,
                :podcast_description,
                :icon_url,
                :language,
                :category,
                :update_period,
                :update_frequency,
                :application_domain,
                :owner_name,
                :owner_email,
                :itunes_explicit,
                :blubrry_url

    CACHE_KEY = "/podcast/rss".freeze

    def initialize
      @podcast_name = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
      @podcast_sub_name = "ちょっときいて呉高専"
      @podcast_summary = "〜呉・呉高専の今をお伝えします〜"
      @podcast_description = "呉高専の高専日誌や最近の出来事を中心に呉の今をお伝えするインターネットラジオです。"
      @application_domain = application_server_domain
      @icon_url = @application_domain + "/podcast/icon.png"
      @language = "ja"
      @category = ["Government & Organizations", "Local"]
      @update_period = "hourly"
      @update_frequency = "1"
      @owner_name = "ちょっくれ制作班"
      @owner_email = "cho.kure.radio@gmail.com"
      @itunes_explicit = "clean"
      @blubrry_url = "http://media.blubrry.com/kure_radio/"
    end

    def application_server_domain
      server_domain(
        development: "http://localhost:5000",
        production: ENV.fetch("EC2_PRODUCTION_PROTOCOL") { "" } + "://" + ENV.fetch("EC2_PRODUCTION_HOST") { "" },
      )
    end

    def mp3_upload_server_domain
      server_domain(
        development: "http://localhost:5000",
        production: ENV.fetch("S3_PRODUCTION_PROTOCOL") { "" } + "://" + ENV.fetch("S3_PRODUCTION_HOST") { "" },
      )
    end

    def server_domain(development:, production:)
      case Rails.env
      when "development" || "test"
        development
      when "production"
        production
      else
        development
      end
    end
  end
end
