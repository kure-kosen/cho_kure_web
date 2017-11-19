require "faker"

(1..10).each do |i|
  Radio.seed do |r|
    r.id = i
    r.title = Faker::Lorem.word
    r.description = Faker::Lorem.sentence
    r.mp3 = File.open(Rails.root.join("db", "fixtures", "audios", "sample.mp3"))
    r.youtube_url = Faker::Internet.url("youtube.com")
    r.podcast_url = Faker::Internet.url("podcast.com")
  end
end
