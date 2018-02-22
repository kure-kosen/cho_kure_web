class JargonSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :radio_id, :major, :created_at, :updated_at

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
