require "rails_helper"

RSpec.describe Personality, type: :model do
  describe "scope" do
    describe "on_public" do
      it "returns 3 personalities count" do
        count = described_class.on_public.count
        create(:personality, :guest)
        create(:personality, :editor)
        create(:personality, :secret)
        create(:personality, :admin)

        expect(described_class.on_public.count).to eq count + 3
      end

      it "returns personalities without secret" do
        create(:personality, :guest)
        create(:personality, :editor)
        create(:personality, :secret)
        create(:personality, :admin)

        described_class.on_public.each do |personality|
          expect(personality.role).not_to be PersonalityRoles::SECRET
        end
      end
    end

    describe "appeared" do
      it "returns personalities that have appeared radio" do
        count = described_class.appeared.count
        create(:radio, :published).tap do |radio|
          create(:radio_personality, radio: radio, personality: create(:personality, :guest))
          create(:radio_personality, radio: radio, personality: create(:personality, :guest))
          create(:radio_personality, radio: radio, personality: create(:personality, :guest))
        end

        expect(Personality.appeared.count).to eq count + 3
      end

      context "when radio of draft" do
        it "returns no personalities" do
          count = described_class.appeared.count
          create(:radio, :draft).tap do |radio|
            create(:radio_personality, radio: radio, personality: create(:personality, :guest))
            create(:radio_personality, radio: radio, personality: create(:personality, :guest))
            create(:radio_personality, radio: radio, personality: create(:personality, :guest))
          end

          expect(described_class.appeared.count).to eq count
        end
      end
    end
  end

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

  describe "#change_role_to_reviewer!" do
    let(:guest) { create(:personality, :guest) }

    it "change role to reviewer" do
      expect(guest.reviewer?).to be false
      guest.change_role_to_reviewer!
      expect(guest.reviewer?).to be true
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
