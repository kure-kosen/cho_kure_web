# == Schema Information
#
# Table name: jargons
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :text(65535)      not null
#  radio_id    :integer          not null
#  major       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image       :string(255)
#
# Indexes
#
#  index_jargons_on_name      (name) UNIQUE
#  index_jargons_on_radio_id  (radio_id)
#
# Foreign Keys
#
#  fk_rails_...  (radio_id => radios.id)
#

class JargonSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :major, :image

  belongs_to :radio

  def image
    ActionController::Base.helpers.image_url(object.image_url)
  end

  def description
    MarkdownHelper.markdown(object.description)
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
