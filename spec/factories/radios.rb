FactoryBot.define do
  factory :radio do
    sequence(:title) { |n| "##{n} radio_title" }
    description "We talked hoge, huga, foo, bar, and so on."
    mp3 { File.open(Rails.root.join("spec", "factories", "audios", "test.mp3")) }

    trait :draft do
      published_at nil
    end

    trait :reservation do
      published_at { 1.week.since }
    end

    trait :published do
      published_at { Time.zone.now }
    end
  end
end
