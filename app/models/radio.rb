# == Schema Information
#
# Table name: radios
#
#  id           :integer          not null, primary key
#  title        :string(255)      not null
#  description  :text(65535)      not null
#  mp3          :string(255)      not null
#  youtube_url  :string(255)
#  podcast_url  :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  published_at :datetime
#  duration     :integer          not null
#  size         :integer          not null
#  image        :string(255)
#
# Indexes
#
#  index_radios_on_published_at  (published_at)
#

class Radio < ApplicationRecord
  mount_uploader :image, RadioImageUploader
  mount_uploader :mp3, RadioMp3Uploader

  has_many :radio_personalities, dependent: :destroy
  has_many :personalities, through: :radio_personalities
  has_many :community_radios, dependent: :destroy
  has_many :communities, through: :community_radios

  before_save :extract_meta_mp3

  validates :title,
            presence: true,
            uniqueness: true

  validates :description, presence: true

  validates :mp3, presence: true

  validates :youtube_url, url: true

  validates :podcast_url, url: true

  scope :published, -> {
    where.not(published_at: nil).
      where("published_at <= ?", Time.zone.now)
  }

  def extract_meta_mp3
    Rails.logger.debug(' ===== log start =======')
    Rails.logger.debug("#{__FILE__}:#{__LINE__ }")
    Rails.logger.debug("self : #{self}")
    Rails.logger.debug("self.mp3 : #{self.mp3}")
    Rails.logger.debug("self.mp3.class : #{self.mp3.class}")
    Rails.logger.debug("self.mp3.file : #{self.mp3.file}")

    Rails.logger.debug("self.mp3.respond_to?(:file) : #{self.mp3.respond_to?(:file)}")
    Rails.logger.debug("self.mp3.file.respond_to?(:file) : #{self.mp3.file.respond_to?(:file)}")
    Rails.logger.debug(' ===== log end =======')

    meta = MetaExtractor::Mp3.new(self.mp3.file.file)

    self.duration = meta.duration
    self.size = meta.size
  end

  def publish?
    !published_at.nil? && published_at <= Time.zone.now
  end

  def reservation?
    !published_at.nil? && published_at > Time.zone.now
  end

  def draft?
    published_at.nil?
  end
end
