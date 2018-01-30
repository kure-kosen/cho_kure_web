raise StandardError, "production環境では利用できません" if Rails.env.production?

Contact.seed do |i|
  i.id = 1
  i.corner = ContactCorners::NORMAL
  i.message = "hoge" * rand(1..20) + "fuga" * rand(1..20)
  i.nickname = "ちゃんゆー"
  i.name = "中村 優"
  i.department = ContactDepartments::ADVANCED
  i.grade = ContactGrades::JUNIOR
end
Contact.seed do |i|
  i.id = 2
  i.corner = ContactCorners::FEEDBACK
  i.message = "hoge" * rand(1..20) + "fuga" * rand(1..20)
  i.nickname = "ぺっぺー"
  i.name = "新谷 哲平"
  i.department = ContactDepartments::GRADUATE
  i.grade = ContactGrades::OBOG
end
Contact.seed do |i|
  i.id = 3
  i.corner = ContactCorners::CASTING
  i.message = "hoge" * rand(1..20) + "fuga" * rand(1..20)
  i.nickname = "平清盛"
  i.name = "金子 平"
  i.department = ContactDepartments::E
  i.grade = ContactGrades::FOURTH_GRADE
end
Contact.seed do |i|
  i.id = 4
  i.corner = ContactCorners::FEEDBACK
  i.message = "hoge" * rand(1..20) + "fuga" * rand(1..20)
  i.nickname = "かじくん"
  i.name = "梶 凌太"
  i.department = ContactDepartments::E
  i.grade = ContactGrades::SECOND_GRADE
end
