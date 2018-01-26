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

class ContactSerializer < ActiveModel::Serializer
  attributes :id, :corner, :message, :nickname, :name, :department, :grade
end
