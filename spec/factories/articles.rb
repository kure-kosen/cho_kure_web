FactoryBot.define do
  factory :article do
    title "MyString"
    content "MyText"
    autosave_content "MyText"
    writer nil
  end
end
