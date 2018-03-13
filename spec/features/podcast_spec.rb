require "rails_helper"

feature "listen on Podcast", js: true do
  background do
    visit front_path
  end

  it "displays button" do
    expect(find(".how-to-podcast")).to be_present
  end

  feature "modal", js: true do
    background do
      find(".how-to-podcast").click
    end

    it "displays modal" do
      expect(page).to have_css ".modal-mask"
    end

    it "displays move to podcast page button" do
      expect(find(".move-podcast")).to be_present
    end

    it "move to podcast page" do
      find(".move-podcast").click

      expect(page).to have_current_path "https://itunes.apple.com/jp/podcast/ちょっときいて呉高専-呉高専の今をお伝えします/id1293031618?mt=2"
    end

    it "closes modal" do
      find(".modal-close", match: :first).click

      expect(page).not_to have_css ".modal-mask"
    end
  end
end
