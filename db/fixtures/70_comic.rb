raise StandardError, "production環境では利用できません" if Rails.env.production?

(1..10).each do |i|
  Comic.seed do |c|
    c.id = i
    c.radio = Radio.all.sample
    c.image = File.open(Rails.root.join("db", "fixtures", "images", "comic_0#{[*1..3].sample}.jpg"))
  end
end
