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

class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :description, :created_at, :updated_at, :logo

  def description
    MarkdownHelper.markdown(object.description)
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
