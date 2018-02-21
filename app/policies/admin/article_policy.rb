class Admin::ArticlePolicy < Admin::BasePolicy
  def upload_image?
    return true unless personality.nil?
    false
  end
end
