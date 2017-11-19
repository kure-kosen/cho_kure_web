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
#

class Radio < ApplicationRecord
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
end
