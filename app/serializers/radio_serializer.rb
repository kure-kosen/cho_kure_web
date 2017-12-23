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

class RadioSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :mp3, :youtube_url, :podcast_url, :image, :duration, :published_at, :created_at, :updated_at

  def image
    ActionController::Base.helpers.image_url(object.image_url(:thumb))
  end

  def description
    MarkdownHelper.markdown(object.description)
  end

  def published_at
    object.published_at&.to_s(:datetime)
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
