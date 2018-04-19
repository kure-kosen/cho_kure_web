class Admin::PersonalityPolicy < Admin::BasePolicy
  def index?
    true
  end

  def show?
    return true if personality.member?
    return true if personality.guest? && personality == record
    false
  end

  def update?
    return true if personality.admin? || personality.secret?
    # 自分のユーザー情報は誰でも更新できる
    return true if personality == record
    # 編集者はゲストのユーザー情報を更新できる
    return true if personality.editor? && record.guest?
    false
  end

  def destroy?
    # 自分自身のユーザー情報は削除できない
    return false if personality == record
    return true if personality.admin? || personality.secret?
    false
  end

  def change_role_to_guest?
    return true if personality.allow_change_role?
    false
  end

  def change_role_to_editor?
    return true if personality.allow_change_role?
    false
  end

  def change_role_to_secret?
    return true if personality.allow_change_role?
    false
  end

  def change_role_to_admin?
    return true if personality.allow_change_role?
    false
  end

  class Scope < Scope
    def resolve
      if personality.guest?
        scope.where(id: personality.id)
      else
        scope.all.includes(:taggings)
      end
    end
  end
end
