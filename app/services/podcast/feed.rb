require "rss"

module Podcast
  class Feed
    def initialize
      @config = Config.new

      @feed = RSS::Maker.make("2.0") do |feed|
        set_channel_from_config(feed.channel)
        set_itunes_from_config(feed.channel)

        feed.channel.itunes_categories.new_category do |category|
          category.text = @config.category[0]
          category.new_category.text = @config.category[1]
        end

        radios = [
          {
            title: "title1",
            path: "http://hoge/radios/1",
            mp3: "http://hoge/1.mp3",
            published_at: "Mon, 02 Oct 2017 01:34:09 +0000",
            description: "ほげほげほげほげげ",
            size: 12345667,
            duration: 600,
          },
          {
            title: "title2",
            path: "http://hoge/radios/2",
            mp3: "http://hoge/2.mp3",
            published_at: "Mon, 02 Oct 2017 01:34:09 +0000",
            description: "ふがふがふがふがふがが",
            size: 98787654,
            duration: 6000,
          },
        ]

        radios.each do |radio|
          set_item(feed.items, radio)
        end
      end
    end

    def generate
      @feed.to_xml
    end

    private

      def set_channel_from_config(channel)
        channel.title               = @config.podcast_name
        channel.link                = @config.application_url
        channel.description         = @config.podcast_description
        channel.language            = @config.language
        channel.sy_updatePeriod     = @config.update_period
        channel.sy_updateFrequency  = @config.update_frequency
        channel.managingEditor      = "#{@config.owner_email} (#{@config.owner_name})"
        channel.lastBuildDate       = Time.now.utc # 一番後のpublished_atの値が入る
      end

      def set_itunes_from_config(channel)
        channel.itunes_summary            = @config.podcast_summary
        channel.itunes_author             = @config.owner_name
        channel.itunes_explicit           = @config.itunes_explicit
        channel.itunes_image              = @config.podcast_icon_url
        channel.itunes_owner.itunes_name  = @config.owner_name
        channel.itunes_owner.itunes_email = @config.owner_email
        channel.itunes_subtitle           = @config.podcast_sub_name
      end

      def set_item(items, radio)
        items.new_item do |item|
          item.title            = radio[:title]
          item.link             = radio[:path]
          item.description      = radio[:description]
          item.pubDate          = radio[:published_at]
          item.itunes_duration  = duration_to_format(radio[:duration])
          item.enclosure.url    = radio[:mp3]
          item.enclosure.type   = "audio/mpeg"
          item.enclosure.length = radio[:size]
        end
      end

      def duration_to_format(sec)
        Time.at(sec).utc.strftime((sec < 3600) ? "%-M:%S" : "%-H:%M:%S")
      end
  end
end
