class Admin::RadioPolicy < Admin::BasePolicy
  def show?
    return true if personality.member?
    return true if personality.guest? && personality.in?(record.personalities)

    false
  end
end
