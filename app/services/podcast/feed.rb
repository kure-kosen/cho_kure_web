require "rss"

module Podcast
  class Feed
    include Rails.application.routes.url_helpers

    def initialize(radios)
      @config = Config.new

      @feed = RSS::Maker.make("2.0") do |feed|
        set_channel_from_config(feed.channel)
        set_itunes_from_config(feed.channel)

        feed.channel.itunes_categories.new_category do |category|
          category.text = @config.category[0]
          category.new_category.text = @config.category[1]
        end

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
        channel.link                = @config.application_domain
        channel.description         = @config.podcast_description
        channel.language            = @config.language
        channel.sy_updatePeriod     = @config.update_period
        channel.sy_updateFrequency  = @config.update_frequency
        channel.managingEditor      = "#{@config.owner_email} (#{@config.owner_name})"
        channel.lastBuildDate       = Time.zone.now.to_s(:rfc822)
      end

      def set_itunes_from_config(channel)
        channel.itunes_summary            = @config.podcast_summary
        channel.itunes_author             = @config.owner_name
        channel.itunes_explicit           = @config.itunes_explicit
        channel.itunes_image              = @config.icon_url
        channel.itunes_owner.itunes_name  = @config.owner_name
        channel.itunes_owner.itunes_email = @config.owner_email
        channel.itunes_subtitle           = @config.podcast_sub_name
      end

      def set_item(items, radio)
        items.new_item do |item|
          item.title            = radio.title
          item.link             = join_radio_link(radio)
          item.description      = MarkdownHelper.markdown(radio.description)
          item.pubDate          = radio.published_at.to_s(:rfc822)
          item.itunes_duration  = format_duration(radio.duration)
          item.enclosure.url    = radio.mp3_url
          item.enclosure.type   = "audio/mpeg"
          item.enclosure.length = radio.size
        end
      end

      def format_duration(sec)
        Time.at(sec).utc.strftime((sec < 3600) ? "%-M:%S" : "%-H:%M:%S")
      end

      def join_radio_link(radio)
        "#{@config.application_domain}/app/radios/#{radio.id}"
      end
  end
end
