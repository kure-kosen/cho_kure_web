class UrlValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    return if value.blank?
    begin
      uri = URI.parse(value)
      record.errors.add(attribute, "が正しい形式ではありません") unless uri.is_a?(URI::HTTP)
    rescue URI::InvalidURIError
      record.errors.add(attribute, "が正しい形式ではありません")
    end
  end
end
