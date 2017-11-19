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
#  logo        :string(255)
#

class Community < ApplicationRecord
  mount_uploader :logo, CommunityLogoUploader

  has_many :host_events, foreign_key: "host_id", dependent: :destroy
  has_many :events, through: :host_events

  validates :name, presence: true
  validates :description, presence: true
end
