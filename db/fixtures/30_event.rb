raise StandardError, "production環境では利用できません" if Rails.env.production?

community_ids = Community.pluck(:id)

(1..50).each do |i|
  Event.seed do |e|
    e.id = i
    e.name = %w[呉 Rails 高専].sample + %w[ハンズオン 祭り キャンプ の市 交流会].sample
    e.description = "hoge" * 20
    e.url = "http://kure.event.example.jp" if i.odd?
    e.hosts = Community.where(id: community_ids.sample(rand(4)))
    started = rand(-30..30).days.ago
    e.started_at = started
    e.ended_at = started.days_since(rand(1..7))
  end
end
