# == Schema Information
#
# Table name: comics
#
#  id         :integer          not null, primary key
#  image      :string(255)      not null
#  radio_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_comics_on_radio_id  (radio_id)
#
# Foreign Keys
#
#  fk_rails_...  (radio_id => radios.id)
#

class ComicSerializer < ActiveModel::Serializer
  attributes :id, :image, :created_at, :updated_at

  has_one :comic

  def image
    ActionController::Base.helpers.image_url(object.image_url(:thumb))
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
