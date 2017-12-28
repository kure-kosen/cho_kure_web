class Admin::DashboardPolicy
  attr_reader :personality, :record

  def initialize(personality, record)
    @personality = personality
    @record = record[1]
  end

  def index?
    true
  end
end
