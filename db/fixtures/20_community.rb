(1..20).each do |i|
  Community.seed do |c|
    c.id = i
    c.name = %w[料理 アウトドア 工作 プログラミング 釣り].sample + %w[の会 サークル クラブ 同好会 団].sample
    c.url = "http://example#{i}.com"
    c.description = "hoge" * 20
  end
end
