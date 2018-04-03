require "rails_helper"

feature "privacy_policy", js: true do
  it "can move to HP of knct from /app" do
    visit "/app"
    find("p", text: "×").click
    click_on "プライバシーポリシー"

    expect(page).to have_content "プライバシーポリシー"
  end
end
