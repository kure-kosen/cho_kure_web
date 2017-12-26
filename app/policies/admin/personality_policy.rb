class Admin::PersonalityPolicy < Admin::BasePolicy
  def index?
    true
  end

  def show?
    return true if personality.member?
    return true if personality.guest? && personality == record
    false
  end

  def create?
    return true if personality.member?
    false
  end

  def new?
    create?
  end

  def update?
    return true if personality.admin? || personality.secret?
    # 自分のユーザー情報は誰でも更新できる
    return true if personality == record
    # 編集者はゲストのユーザー情報を更新できる
    return true if personality.editor? && record.guest?
    false
  end

  def edit?
    update?
  end

  def destroy?
    return true if personality.member?
    false
  end

  class Scope < Scope
    def resolve
      if personality.guest?
        scope.where(id: personality.id)
      else
        scope.all
      end
    end
  end
end
