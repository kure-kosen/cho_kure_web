class Admin::PersonalityPolicy < Admin::BasePolicy
  def index?
    return true if personality.member?
    false
  end

  def show?
    return true if personality.member?
    return true if personality.guest? && personality.in?(record.personalities)
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
    return true if personality.member?
    return true if personality.guest? && personality.in?(record.personalities)
    false
  end

  def edit?
    update?
  end

  def destroy?
    return true if personality.member?
    false
  end
end
