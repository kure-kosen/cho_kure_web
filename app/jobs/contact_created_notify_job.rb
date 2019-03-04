class ContactCreatedNotifyJob < ApplicationJob
  queue_as :default

  def perform(nickname:, message:)
    Rails.logger.info("===================================")
    Rails.logger.info("class: #{self.class}")
    Rails.logger.info("nickname: #{nickname}")
    Rails.logger.info("message: #{message}")
    Rails.logger.info("===================================")

    nickname ||= "[名前未入力]"
    text = <<~TEXT
      ラジオネーム：#{nickname}さんからおたよりが届いたよ！
      ------------------------------------------------
      #{message}
    TEXT

    Notifier::SlackNotifier.call(
      text: text,
      channel: "#z_feed-debug_デバッグ",
      username: "ハムスター師匠",
      icon_emoji: ":hamster_dance:",
      force: true,
    )
  end
end
