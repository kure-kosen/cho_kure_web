FactoryBot.define do
  factory :personality do
    sequence(:email) { |n| "test_#{n}@example.com" }
    sequence(:name) { |n| "name_#{n}" }
    password "password"
    password_confirmation "password"

    trait :guest do
      role PersonalityRoles::GUEST
    end

    trait :editor do
      role PersonalityRoles::EDITOR
    end

    trait :secret do
      role PersonalityRoles::SECRET
    end

    trait :admin do
      role PersonalityRoles::ADMIN
    end
  end
end
