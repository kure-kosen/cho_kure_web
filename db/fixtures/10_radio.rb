require "faker"

10.times do |i|
  Radio.seed do |radio|
    radio.attributes = {
      id: i,
      title: Faker::Lorem.word,
      description: Faker::Lorem.sentence,
      mp3: Faker::Internet.slug(nil, "/"),
      youtube_url: Faker::Internet.url("youtube.com"),
      podcast_url: Faker::Internet.url("podcast.com"),
    }
  end
end
