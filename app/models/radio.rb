# == Schema Information
#
# Table name: radios
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text(65535)      not null
#  mp3         :string(255)      not null
#  youtube_url :string(255)
#  podcast_url :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image       :string(255)
#

class Radio < ApplicationRecord
  mount_uploader :image, RadioImageUploader
  mount_uploader :mp3, RadioMp3Uploader

  validates :title,
            presence: true,
            uniqueness: true
  validates :description, presence: true
  validates :mp3, presence: true
  validates :youtube_url, url: true
  validates :podcast_url, url: true
end
