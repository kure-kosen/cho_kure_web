class ComicSerializer < ActiveModel::Serializer
  attributes :id, :image, :created_at, :updated_at

  has_one :comic

  def image
    ActionController::Base.helpers.image_url(object.image_url(:thumb))
  end

  def created_at
    object.created_at.to_s(:datetime)
  end

  def updated_at
    object.updated_at.to_s(:datetime)
  end
end
