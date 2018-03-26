FactoryBot.define do
  factory :radio do
    sequence(:title) { |n| "##{n} radio_title" }
    description "We talked hoge, huga, foo, bar, and so on."
    mp3 { File.open(Rails.root.join("spec", "factories", "audios", "test.mp3")) }
    duration 1000
    size 10000

    trait :draft do
      published_at nil
    end

    trait :published do
      published_at { Time.zone.now }
    end
  end
end
