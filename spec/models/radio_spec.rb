require "rails_helper"

RSpec.describe Radio, type: :model do
  describe "scope" do
    describe "published" do
      it "returns published records" do
        count = described_class.published.count
        create(:radio, :published)
        create(:radio, :published)
        create(:radio, :reservation)
        create(:radio, :draft)
        expect(described_class.published.count).to eq count + 2
      end
    end
  end

  describe "#extract_meta_mp3" do
    let(:radio) { build(:radio) }
    it "set size and duration" do
      old = radio.clone
      expect(radio).to have_attributes(size: nil, duration: nil)
      radio.extract_meta_mp3
      expect(radio).to have_attributes(
        size: 58931,
        duration: 3,
        title: old.title,
        description: old.description,
        mp3_url: old.mp3_url,
        digest_mp3_url: old.digest_mp3_url,
        published_at: old.published_at,
        image_url: old.image_url,
      )
    end
  end

  describe "#publish?" do
    subject { radio.publish? }

    let(:radio) { create(:radio, published_at: published_at) }

    context "when draft" do
      let(:published_at) { nil }
      it { is_expected.to be false }
    end

    context "when reservation" do
      let(:published_at) { 1.week.since }
      it { is_expected.to be false }
    end

    context "when publish" do
      let(:published_at) { 3.days.ago }
      it { is_expected.to be true }
    end
  end

  describe "#reservation?" do
    subject { radio.reservation? }

    let(:radio) { create(:radio, published_at: published_at) }

    context "when draft" do
      let(:published_at) { nil }
      it { is_expected.to be false }
    end

    context "when reservation" do
      let(:published_at) { 1.week.since }
      it { is_expected.to be true }
    end

    context "when publish" do
      let(:published_at) { 3.days.ago }
      it { is_expected.to be false }
    end
  end

  describe "#draft?" do
    subject { radio.draft? }

    let(:radio) { create(:radio, published_at: published_at) }

    context "when draft" do
      let(:published_at) { nil }
      it { is_expected.to be true }
    end

    context "when reservation" do
      let(:published_at) { 1.week.since }
      it { is_expected.to be false }
    end

    context "when publish" do
      let(:published_at) { 3.days.ago }
      it { is_expected.to be false }
    end
  end

  describe "#play_time" do
    before do
      allow_any_instance_of(Radio).to receive(:extract_meta_mp3).and_return(nil)
    end

    context "under 1 minute" do
      it { expect(create(:radio, size: 1000, duration: 3).play_time).to eq "0:03" }
      it { expect(create(:radio, size: 1000, duration: 20).play_time).to eq "0:20" }
    end

    context "under 1 hour" do
      it { expect(create(:radio, size: 1000, duration: 300).play_time).to eq "5:00" }
      it { expect(create(:radio, size: 1000, duration: 1000).play_time).to eq "16:40" }
    end

    context "over 1 hour" do
      it { expect(create(:radio, size: 1000, duration: 3600).play_time).to eq "1:00:00" }
      it { expect(create(:radio, size: 1000, duration: 4000).play_time).to eq "1:06:40" }
    end
  end
end
