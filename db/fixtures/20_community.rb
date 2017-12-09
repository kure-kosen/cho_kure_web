raise StandardError, "production環境では利用できません" if Rails.env.production?

tags = %w[呉 高専 IW ごはん スポーツ]

(1..20).each do |i|
  Community.seed do |c|
    c.id = i
    c.name = %w[料理 アウトドア 工作 プログラミング 釣り].sample + %w[の会 サークル クラブ 同好会 団].sample
    c.tag_list = tags.sample(rand(5)).join(",")
    c.url = "http://example#{i}.com"
    c.description = "hoge" * 20
  end
end
