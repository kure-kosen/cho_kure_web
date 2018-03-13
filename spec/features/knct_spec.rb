require "rails_helper"

feature "knct", js: true do
  it "can move to HP of knct from /app" do
    visit "/app"
    click_on "呉高専HP"

    expect(page).to have_current_path "https://www.kure-nct.ac.jp/"
  end
end
