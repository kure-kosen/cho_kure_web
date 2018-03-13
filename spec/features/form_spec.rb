require "rails_helper"

feature "form", js: true do
  background do
    visit front_path
    click_on "投稿フォーム・お問い合わせ"
  end

  it "displays selectbox for コーナー名" do
    expect(page).to have_selector "select[name=corner]", visible: false
  end

  it "displays text-area for メッセージ" do
    expect(page).to have_selector "textarea[name=message]"
  end

  it "displays textbox for ラジオネーム" do
    expect(page).to have_selector "input[type=text][name=nickname]"
  end

  it "displays textbox for お名前" do
    expect(page).to have_selector "input[type=text][name=name]"
  end

  it "displays selectbox for 所属" do
    expect(page).to have_selector "select[name=department]", visible: false
  end

  it "displays selectbox for 学年" do
    expect(page).to have_selector "select[name=grade]", visible: false
  end

  it "displays checkbox for ラジオでの読上げについて" do
    expect(page).to have_selector "input[type=checkbox][name=readable]", visible: false
  end

  it "displays send button" do
    expect(page).to have_selector "button", text: "送信"
  end

  it "can't send post" do
    fill_in "message", with: "     "
    find("label", text: "所属").click # フォーカスを外す
    page.all(".ui.selection.dropdown")[1].click
    find(".item", text: "電気情報工学科").click

    click_on "送信"

    expect(page).to have_selector "div.ui.icon.error.message"
  end

  it "can send post" do
    fill_in "message", with: "hoge"
    find("label", text: "所属").click # フォーカスを外す
    page.all(".ui.selection.dropdown")[1].click
    page.save_screenshot File.expand_path("../screenshots/2.png", __dir__)
    find(".item", text: "電気情報工学科").click

    expect { click_on "送信" }.to change(Contact, :count).by(1)
  end
end
