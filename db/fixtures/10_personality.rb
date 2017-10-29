Personality.seed do |p|
  p.id = 1
  p.name = "新谷 哲平"
  p.email = "shintani@example.com"
  p.description = "つくばにいます。\nこんにちは。"
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"

  # comfirmをスキップする
  p.confirmed_at = Time.zone.now
end

Personality.seed do |p|
  p.id = 2
  p.name = "中村 優"
  p.email = "nakamura@example.com"
  p.description = "独自のワールドを展開するのが得意です。\n絵が描けます｡"
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"

  # comfirmをスキップする
  p.confirmed_at = Time.zone.now
end

Personality.seed do |p|
  p.id = 3
  p.name = "金子 平"
  p.email = "kaneko@example.com"
  p.description = "期待のホープです。\n期待とホープって意味が同じな気がするのは気のせいでしょうか。"
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"

  # comfirmをスキップする
  p.confirmed_at = Time.zone.now
end

Personality.seed do |p|
  p.id = 4
  p.name = "ほげ ほげ男"
  p.email = "hoge@example.com"
  p.description = "ほげ" * 50
  p.role = PersonalityRoles::EDITOR
  p.password = "password"
  p.password_confirmation = "password"

  # comfirmをスキップする
  p.confirmed_at = Time.zone.now
end

Personality.seed do |p|
  p.id = 5
  p.name = "ふが ふが子"
  p.email = "fuga@example.com"
  p.description = "ふが" * 50
  p.role = PersonalityRoles::GUEST
  p.password = "password"
  p.password_confirmation = "password"

  # comfirmをスキップする
  p.confirmed_at = Time.zone.now
end
