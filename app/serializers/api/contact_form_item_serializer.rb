class Api::ContactFormItemSerializer < ActiveModel::Serializer
  attribute(:corners) { enum_to_hash(object.corners) }
  attribute(:departments) { enum_to_hash(object.departments) }
  attribute(:grades) { enum_to_hash(object.grades) }

  private

    def enum_to_hash(enum)
      Hash[*enum.map { |e| [e.t, e.value] if e.t != '未記入' }.compact.flatten]
    end
end
