require "rails_helper"

RSpec.describe Api::ContactFormItem, type: :model do
  describe ".initialize" do
    it "has corners, departments and grades attributes" do
      item = described_class.new
      expect(item).to have_attributes(
        corners: ContactCorners.to_a,
        departments: ContactDepartments.to_a,
        grades: ContactGrades.to_a,
      )
    end
  end
end
