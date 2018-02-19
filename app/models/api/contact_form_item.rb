class Api::ContactFormItem < ActiveModelSerializers::Model
  attr_reader :corners, :departments, :grades

  def initialize
    @corners = ContactCorners.to_a
    @departments = ContactDepartments.to_a
    @grades = ContactGrades.to_a
  end
end
