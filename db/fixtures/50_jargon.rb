raise StandardError, "production環境では利用できません" if Rails.env.production?

radio_ids = Radio.pluck(:id)
(1..50).each do |i|
  Jargon.seed do |j|
    j.id = i
    j.name = %w[機械 電気 環境 建築].sample + "科の" + %w[専門用語 俗語].sample + " " + i.to_s
    j.description = "hoge" * rand(1..20) + "fuga" * rand(1..20)
    j.radio_id = radio_ids.sample
    j.major = JargonMajors.values.sample
  end
end
