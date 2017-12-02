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
#  image        :string(255)
#  published_at :datetime
#  duration     :integer          not null
#  size         :integer          not null
#

class Radio < ApplicationRecord
  mount_uploader :image, RadioImageUploader
  mount_uploader :mp3, RadioMp3Uploader

  has_many :radio_personalities, dependent: :destroy
  has_many :personalities, through: :radio_personalities
  has_many :community_radios, dependent: :destroy
  has_many :communities, through: :community_radios

  before_save :extract_meta_mp3
  after_save :update_podcast_rss_cache

  validates :title,
            presence: true,
            uniqueness: true

  validates :description, presence: true

  validates :mp3, presence: true

  validates :duration,
            presence: true,
            numericality: {
              greater_than_or_equal_to: 0,
            }

  validates :size,
            presence: true,
            numericality: {
              greater_than_or_equal_to: 0,
            }

  validates :youtube_url, url: true

  validates :podcast_url, url: true

  scope :published, -> {
    where.not(published_at: nil)
  }

  def extract_meta_mp3
    meta = MetaExtractor::Mp3.new(self.mp3.file.file)

    self.duration = meta.duration
    self.size = meta.size
  end

  def update_podcast_rss_cache
    Rails.cache.write("/podcast/rss", Podcast::Feed.new(Radio.published).generate, compress: true)
  end
end
