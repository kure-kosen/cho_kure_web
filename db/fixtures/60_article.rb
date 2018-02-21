raise StandardError, "production環境では利用できません" if Rails.env.production?

Article.seed do |a|
  a.id = 1
  a.title = "こんにちは、世界。"
  a.writer = Personality.find_by!(name: "新谷 哲平")
  content = <<~TEXT
    はい、みなさんこんにちは。

    開発 Hello World担当のてっぺーです。

    ![file](https://cho-kure-web-s3.s3.ap-northeast-1.amazonaws.com/s3_uploader/articles/380c656f-b01e-462b-b95c-9f4f564c3035_image-1519190632017.jpg)
  TEXT
  a.content = content
  a.autosave_content = content
  a.published_at = Time.zone.now
end

Article.seed do |a|
  a.id = 2
  a.title = "3分ちゃんゆークッキング"
  a.writer = Personality.find_by(name: "中村 優")
  content = <<~TEXT
    みんな大好きちゃんゆーです。

    今日の3分クッキングはこれ！！！！

    ![file](https://cho-kure-web-s3.s3.ap-northeast-1.amazonaws.com/s3_uploader/articles/808f002e-1ef4-4470-a2be-9ecf16d30d0e_image-1519191537797.jpg)

    美味しそうですよね！

    それでは手順を紹介していきます。

    1. セブンに行って買ってくる。
    2. レジで温めてもらう。(フォークをもらうことを忘れずに！)
    3. 急いで帰って食べる。

    以上3分ちゃんゆークッキングでしたーー！
  TEXT
  a.content = content
  a.autosave_content = content
end
