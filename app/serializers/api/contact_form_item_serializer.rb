class Api::ContactFormItemSerializer < ActiveModel::Serializer
  attribute(:corners) { enum_to_hash(object.corners) }
  attribute(:departments) { enum_to_hash(object.departments) }
  attribute(:grades) { enum_to_hash(object.grades) }

  private

    def enum_to_hash(enum)
      Hash[*enum.map { |enum| [enum.t, enum.value] }.flatten]
    end
end
