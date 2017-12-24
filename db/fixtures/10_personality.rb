raise StandardError, "production環境では利用できません" if Rails.env.production?

Personality.seed do |p|
  p.id = 1
  p.name = "新谷 哲平"
  p.email = "shintani@example.com"
  p.tag_list = "OB,開発"
  p.description = <<~TEXT
    つくばにいます。
    こんにちは。

    [@euglena1215](https://twitter.com/euglena1215)
  TEXT
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"
end

Personality.seed do |p|
  p.id = 2
  p.name = "中村 優"
  p.email = "nakamura@example.com"
  p.tag_list = "専攻科,開発,画伯"
  p.description = <<~TEXT
    独自のワールドを展開するのが得意です。
    絵が描けます｡

    [@chanyou0311](https://twitter.com/chanyou0311)
  TEXT
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"
end

Personality.seed do |p|
  p.id = 3
  p.name = "金子 平"
  p.email = "kaneko@example.com"
  p.tag_list = "本科,開発"
  p.description = <<~TEXT
    期待のホープです。
    期待とホープって意味が同じな気がするのは気のせいでしょうか。

    [@Guri1999120](https://twitter.com/Guri1999120)
  TEXT
  p.role = PersonalityRoles::ADMIN
  p.password = "password"
  p.password_confirmation = "password"
end

Personality.seed do |p|
  p.id = 4
  p.name = "ほげ ほげ男"
  p.email = "hoge@example.com"
  p.tag_list = "ほげ,ふが"
  p.description = "ほげ" * 50
  p.role = PersonalityRoles::EDITOR
  p.password = "password"
  p.password_confirmation = "password"
end

Personality.seed do |p|
  p.id = 5
  p.name = "ふが ふが子"
  p.email = "fuga@example.com"
  p.tag_list = "ほげ,ふが"
  p.description = "ふが" * 50
  p.role = PersonalityRoles::GUEST
  p.password = "password"
  p.password_confirmation = "password"
end
