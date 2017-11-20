class Front::PodcastController < Front::BaseController
  def index
    rss = Podcast::Feed.new(Radio.all).generate
    render xml: rss
  end
end
