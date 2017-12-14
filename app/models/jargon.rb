# == Schema Information
#
# Table name: jargons
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :text(65535)
#  radio_id    :integer
#  major       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Jargon < ApplicationRecord
  validates :name,
            presence: true,
            uniqueness: true
  validates :description, presence: true
  validates :radio_id, presence: true
  validates :major, presence: true

  bind_inum :major, JargonMajors
end
