# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  corner     :integer          not null
#  message    :string(255)      not null
#  nickname   :string(255)
#  name       :string(255)
#  department :integer          not null
#  grade      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ContactSerializer < ActiveModel::Serializer
  attributes :id, :corner, :message, :nickname, :name, :department, :grade
end
