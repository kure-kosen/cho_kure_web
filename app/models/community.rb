# == Schema Information
#
# Table name: communities
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  url         :string(255)
#  description :text(65535)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Community < ApplicationRecord
  has_many :community_events
  has_many :events, through: :community_events

  validates :name, presence: true
  validates :description, presence: true
end
