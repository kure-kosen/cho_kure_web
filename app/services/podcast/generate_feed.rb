require "rss"
# require "rss/maker/syndication"
# require "rss/maker/itunes"

module Podcast
  class GenerateFeed
    def initialize
      feed = RSS::Maker.make("2.0") do |feed|

        channel = feed.channel
        channel.title = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
        channel.link = "http://www.kure-rad.io/feed/podcast"
        channel.description = "〜呉・呉高専の今をお伝えします〜"
        channel.lastBuildDate = Time.now
        channel.sy_updatePeriod = "hourly"
        channel.sy_updateFrequency = "1"

        image = feed.image
        image.url = "http://www.kure-rad.io/wp-content/uploads/2017/11/cropped-sumika-ブルー逆-32x32.jpg"
        image.title = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
        image.width = "32"
        image.height = "32"

        channel.itunes_summary = "呉高専の高専日誌や最近の出来事を中心に呉の今をお伝えするインターネットラジオです。"
        channel.itunes_author = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
        channel.itunes_explicit = "clean"
        channel.itunes_image = "http://www.kure-rad.io/wp-content/uploads/2017/11/ちょっくれロゴ　sumika-ブルー.jpg"
        # feed.channel.itunes_type = "episodic"
        channel.itunes_owner.itunes_name = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
        channel.itunes_owner.itunes_email = "cho.kure.radio@gmail.com"

        channel.managingEditor = "cho.kure.radio@gmail.com (ちょっときいて呉高専 〜呉高専の今をお伝えします〜)"
        channel.itunes_subtitle = "ちょっときいて呉高専"

        # category = RSS::ITunesChannelModel::ITunesCategory.new("Government & Organizations")
        # category_child = RSS::ITunesChannelModel::ITunesCategory.new("Local")
        # category.itunes_categories << category_child

        ["Government & Organizations", "Local"].each do |category|
          channel.itunes_categories.new_category.text = category
        end
      end

      puts feed

      # builder = Nokogiri::XML::Builder.new do |xml|
      #   xml.root {
      #     xml.rss(rss_params) {
      #       xml.channel {
      #         xml.id_ "10"
      #         xml.name "Awesome widget"
      #       }
      #     }
      #   }
      # end

      # puts builder.to_xml
    end

    private

    def rss_params
      Hash.new(
          version: 2.0,
          "xmlns:content": "http://purl.org/rss/1.0/modules/content/",
          "xmlns:wfw": "http://wellformedweb.org/CommentAPI/",
          "xmlns:dc": "http://purl.org/dc/elements/1.1/",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
          "xmlns:sy": "http://purl.org/rss/1.0/modules/syndication/",
          "xmlns:slash": "http://purl.org/rss/1.0/modules/slash/",
          "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
          "xmlns:rawvoice": "http://www.rawvoice.com/rawvoiceRssModule/",
          "xmlns:googleplay": "http://www.google.com/schemas/play-podcasts/1.0"
      )
    end
  end
end
