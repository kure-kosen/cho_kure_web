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
#

class Radio < ApplicationRecord
  validates :title,
            :description,
            :mp3,
            presence: true

  validates :title,
            uniqueness: true

  validates :youtube_url,
            :podcast_url,
            url: true
end
