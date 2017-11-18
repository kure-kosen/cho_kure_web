class Front::PodcastController < Front::BaseController
  def index
    rss = Podcast::Feed.new.generate

    render xml: rss
  end
end
