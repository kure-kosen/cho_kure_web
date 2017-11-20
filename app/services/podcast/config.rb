module Podcast
  class Config
    attr_reader :podcast_name,
                :podcast_sub_name,
                :podcast_summary,
                :podcast_description,
                :podcast_icon_url,
                :language,
                :category,
                :update_period,
                :update_frequency,
                :application_url,
                :owner_name,
                :owner_email,
                :itunes_explicit

    def initialize
      @podcast_name = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
      @podcast_sub_name = "ちょっときいて呉高専"
      @podcast_summary = "〜呉・呉高専の今をお伝えします〜"
      @podcast_description = "呉高専の高専日誌や最近の出来事を中心に呉の今をお伝えするインターネットラジオです。"
      @podcast_icon_url = "http://www.kure-rad.io/wp-content/uploads/2017/11/ちょっくれロゴ　sumika-ブルー.jpg"
      @language = "ja"
      @category = ["Government & Organizations", "Local"]
      @update_period = "hourly"
      @update_frequency = "1"
      @application_url = application_server_domain
      @owner_name = "ちょっくれ制作班"
      @owner_email = "cho.kure.radio@gmail.com"
      @itunes_explicit = "clean"
    end

    def application_server_domain
      server_domain(
          development: "http://localhost:3000",
          production: ENV.fetch("EC2_PRODUCTION_PROTOCOL") { "" } + "://" + ENV.fetch("EC2_PRODUCTION_HOST") { "" }
      )
    end

    def mp3_upload_server_domain
      server_domain(
          development: "http://localhost:3000",
          production: ENV.fetch("S3_PRODUCTION_PROTOCOL") { "" } + "://" + ENV.fetch("S3_PRODUCTION_HOST") { "" }
      )
    end

    def server_domain(development:, production:)
      case Rails.env
        when :development || :test
          development
        when :production
          production
        else
          development
      end
    end
  end
end
