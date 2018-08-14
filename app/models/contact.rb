# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  readable   :boolean          not null
#  corner     :integer          default(0), not null
#  message    :string(255)      not null
#  nickname   :string(255)
#  name       :string(255)
#  department :integer          default(0), not null
#  grade      :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contact < ApplicationRecord
  validates :corner, presence: true
  validates :message, presence: true
  validates :department, presence: true
  validates :grade, presence: true

  bind_inum :corner, ContactCorners
  bind_inum :department, ContactDepartments
  bind_inum :grade, ContactGrades
end
