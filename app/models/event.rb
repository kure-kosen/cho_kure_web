# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :text(65535)      not null
#  url         :string(255)
#  started_at  :datetime         not null
#  ended_at    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :started_at, presence: true
  validate :start_end_check

  def start_end_check
    errors.add(:ended_at, "の日付を正しく記入してください。") unless started_at < ended_at
  end
end
