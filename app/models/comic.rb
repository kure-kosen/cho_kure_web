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

class Comic < ApplicationRecord
  mount_uploader :image, ComicImageUploader

  belongs_to :radio

  validates :image, presence:true
end
