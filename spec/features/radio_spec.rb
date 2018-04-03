require "rails_helper"

feature "radio", js: true do
  it "displays all published radios" do
    visit "/app"
    find("p", text: "×").click

    expect(page).to have_selector("audio[controls=controls]", count: Radio.where("published_at < ?", Time.zone.now).size)
  end
end
