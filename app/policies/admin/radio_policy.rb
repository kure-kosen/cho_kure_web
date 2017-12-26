class Admin::RadioPolicy < Admin::BasePolicy
  def index?
    true
  end

  def show?
    return true if personality.member?
    return true if personality.guest? && personality.in?(record.personalities)

    false
  end

  class Scope < Scope
    def resolve
      if personality.guest?
        personality.radios
      else
        scope.all
      end
    end
  end
end
