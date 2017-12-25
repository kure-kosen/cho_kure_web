class Admin::RadioPolicy < Admin::BasePolicy
  def index?
    true
  end

  def show?
    return true if personality.member?
    return true if personality.guest? && personality.in?(record.personalities)

    false
  end
end
