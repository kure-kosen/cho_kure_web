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
#  digest_mp3   :string(255)
#
# Indexes
#
#  index_radios_on_published_at  (published_at)
#

class Alexa < ApplicationRecord
  scope :published, -> {
    where.not(published_at: nil).
    where("published_at <= ?", Time.zone.now)
  }

  def publish?
    !published_at.nil? && published_at <= Time.zone.now
  end
end
