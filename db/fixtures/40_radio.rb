raise StandardError, "production環境では利用できません" if Rails.env.production?

require "faker"

personality_ids = Personality.pluck(:id)
community_ids = Community.pluck(:id)

(1..50).each do |i|
  Radio.seed do |r|
    r.id = i
    r.title = Faker::Lorem.word
    r.personalities = Personality.where(id: personality_ids.sample(rand(1..3)))
    r.communities = Community.where(id: community_ids.sample(rand(3)))
    r.description = <<~TEXT
      hoge, hoge, hogeなどの話をしました。

      紹介した高専日誌
      * [ほげほげ](http://example.hoge.com)
      * [ほげほげ](http://example.hoge.com)
      * [ほげほげ](http://example.hoge.com)

      関連リンク
      * [google](https://google.com)
      * [google](https://google.com)
      * [google](https://google.com)
    TEXT
    r.mp3 = File.open(Rails.root.join("db", "fixtures", "audios", "sample.mp3"))
    r.youtube_url = Faker::Internet.url("youtube.com")
    r.podcast_url = Faker::Internet.url("podcast.com")
    r.published_at = Time.zone.now if i.odd?
  end
end
