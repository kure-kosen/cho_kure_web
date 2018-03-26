require "rails_helper"

RSpec.describe Personality, type: :model do
  describe "#member?" do
    let(:guest) { create(:personality, :guest) }
    let(:editor) { create(:personality, :editor) }
    let(:secret) { create(:personality, :secret) }
    let(:admin) { create(:personality, :admin) }

    it { expect(guest.member?).to be false }
    it { expect(editor.member?).to be true }
    it { expect(secret.member?).to be true }
    it { expect(admin.member?).to be true }
  end

  describe "#allow_change_role?" do
    let(:guest) { create(:personality, :guest) }
    let(:editor) { create(:personality, :editor) }
    let(:secret) { create(:personality, :secret) }
    let(:admin) { create(:personality, :admin) }

    it { expect(guest.allow_change_role?).to be false }
    it { expect(editor.allow_change_role?).to be false }
    it { expect(secret.allow_change_role?).to be true }
    it { expect(admin.allow_change_role?).to be true }
  end

  describe "#change_role_to_admin!" do
    let(:guest) { create(:personality, :guest) }

    it "change role to admin" do
      expect(guest.admin?).to be false
      guest.change_role_to_admin!
      expect(guest.admin?).to be true
    end
  end

  describe "#change_role_to_secret!" do
    let(:guest) { create(:personality, :guest) }

    it "change role to secret" do
      expect(guest.secret?).to be false
      guest.change_role_to_secret!
      expect(guest.secret?).to be true
    end
  end

  describe "#change_role_to_editor!" do
    let(:guest) { create(:personality, :guest) }

    it "change role to editor" do
      expect(guest.editor?).to be false
      guest.change_role_to_editor!
      expect(guest.editor?).to be true
    end
  end

  describe "#change_role_to_guest!" do
    let(:editor) { create(:personality, :editor) }

    it "change role to guest" do
      expect(editor.guest?).to be false
      editor.change_role_to_guest!
      expect(editor.guest?).to be true
    end
  end
end
