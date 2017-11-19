require "faker"

personality_ids = Personality.pluck(:id)

(1..10).each do |i|
  Radio.seed do |r|
    r.id = i
    r.title = Faker::Lorem.word
    r.personalities = Personality.where(id: personality_ids.sample(rand(1..3)))
    r.description = Faker::Lorem.sentence
    r.mp3 = Faker::Internet.slug(nil, "/")
    r.duration = rand(1..100000)
    r.size = rand(1..1_000_000)
    r.youtube_url = Faker::Internet.url("youtube.com")
    r.podcast_url = Faker::Internet.url("podcast.com")
  end
end
