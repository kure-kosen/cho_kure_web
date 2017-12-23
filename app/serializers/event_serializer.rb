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

class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :started_at, :ended_at, :created_at, :updated_at

  def description
    MarkdownHelper.markdown(object.description)
  end

  def started_at
    object.started_at.to_s(:datetime)
  end

  def ended_at
    object.ended_at.to_s(:datetime)
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
