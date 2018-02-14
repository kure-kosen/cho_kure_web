# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  corner     :integer          not null
#  readable   :boolean          not null
#  message    :string(255)      not null
#  nickname   :string(255)
#  name       :string(255)
#  department :integer          not null
#  grade      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ApplicationRecord
  validates :corner, presence: true
  validates :message, presence: true
  validates :department, presence: true

  bind_inum :corner, ContactCorners
  bind_inum :department, ContactDepartments
  bind_inum :grade, ContactGrades
end
