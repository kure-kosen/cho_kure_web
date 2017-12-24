class Front::PodcastController < Front::BaseController
  def index
    rss = Rails.cache.fetch(Podcast::Config::CACHE_KEY, compress: true, expires_in: 10.minutes) do
      Podcast::Feed.new(Radio.published).generate
    end

    render xml: rss
  end
end
