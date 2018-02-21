class Admin::ArticlePolicy < Admin::BasePolicy
  def edit?
    return true if record.author == personality && personality.member?
    false
  end

  def update?
    edit?
  end

  def destroy?
    edit?
  end

  def autosave?
    edit?
  end

  def upload_image?
    return true unless personality.nil?
    false
  end
end
