require "rss"
# require "rss/maker/syndication"
# require "rss/maker/itunes"

module Podcast
  class GenerateFeed
    def initialize
      feed = RSS::Maker.make("2.0") do |feed|
        channel = feed.channel
        channel.title = "ちょっときいて呉高専 〜呉高専の今をお伝えします〜"
        channel.link = "http://www.kure-rad.io/"
        channel.description = "〜呉・呉高専の今をお伝えします〜"
        channel.language = "ja"
        channel.lastBuildDate = Time.now.utc
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

        channel.itunes_categories.new_category do |category|
          category.text = "Government & Organizations"
          category.new_category.text = "Local"
        end

        radios = [
          {
            title: "title1",
            path: "/radios/1",
            published_at: "Mon, 02 Oct 2017 01:34:09 +0000",
            description: "ほげほげほげほげげ",
            duration: 600,
          },
          {
            title: "title2",
            path: "radios/2",
            published_at: "Mon, 02 Oct 2017 01:34:09 +0000",
            description: "ふがふがふがふがふがが",
            duration: 6000,
          },
        ]
        radios.each do |radio|
          feed.items.new_item do |item|
            item.title = radio[:title]
            item.link = radio[:path]
            item.description = radio[:description]
            item.pubDate = radio[:published_at]
            item.itunes_duration = duration_to_format(radio[:duration])
          end
        end
      end

      puts feed
    end

    private

      def duration_to_format(sec)
        Time.at(sec).utc.strftime((sec < 3600) ? "%-M:%S" : "%-H:%M:%S")
      end
  end
end
