class Front::PodcastController < Front::BaseController
  def index
    rss = Rails.cache.fetch("/podcast/rss") do
            Podcast::Feed.new(Radio.published).generate
          end

    render xml: rss
  end
end
