class Admin::BasePolicy
  attr_reader :personality, :record

  def initialize(personality, record)
    @personality = personality
    @record = record[1]
  end

  def index?
    return true if personality.member?
    false
  end

  def show?
    return true if personality.member?
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
    false
  end

  def edit?
    update?
  end

  def destroy?
    return true if personality.member?
    false
  end

  def scope
    Pundit.policy_scope!(user, record.class)
  end

  class Scope
    attr_reader :personality, :scope

    def initialize(personality, scope)
      @personality = personality
      @scope = scope[1]
    end

    def resolve
      scope
    end
  end
end
