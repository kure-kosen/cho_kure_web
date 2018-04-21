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

class Jargon < ApplicationRecord
  mount_uploader :image, JargonImageUploader

  belongs_to :radio

  validates :name,
            presence: true,
            uniqueness: true

  validates :description, presence: true

  validates :radio_id, presence: true

  validates :major, presence: true

  bind_inum :major, JargonMajors

  after_initialize :set_image_default, if: :new_record?

  private
  def set_image_default
  #  image ||= "default/" + [version_name, "jargon_image_m.png"].compact.join("_") if major == 10
  #  image ||= "default/" + [version_name, "jargon_image_e.png"].compact.join("_") if major == 20
  #  image ||= "default/" + [version_name, "jargon_image_c.png"].compact.join("_") if major == 30
  #  image ||= "default/" + [version_name, "jargon_image_a.png"].compact.join("_") if major == 40
  end
end
