class Front::PodcastController < Front::BaseController
  def index
    rss = Podcast::Feed.new(Radio.published).generate
    render xml: rss
  end
end
