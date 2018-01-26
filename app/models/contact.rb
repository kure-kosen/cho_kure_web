# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  corner     :integer
#  message    :string(255)
#  nickname   :string(255)
#  name       :string(255)
#  department :integer
#  grade      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ApplicationRecord
  validates :corner, presence: true
  validates :message, persence: true
  validates :nickname
  validates :name
  validates :department, presence: true
  validates :grade

  bind_inum :corner, ContactCorners
  bind_inum :department, ContactDepartments
  bind_inum :grade, ContactGrades
end
