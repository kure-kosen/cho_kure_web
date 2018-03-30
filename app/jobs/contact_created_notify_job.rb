class ContactCreatedNotifyJob < ApplicationJob
  queue_as :default

  def perform(nickname:, message:)
    nickname ||= "[名前未入力]"
    text = <<~TEXT
      ラジオネーム：#{nickname}さんからおたよりが届いたよ！
      ------------------------------------------------
      #{message}
    TEXT

    Notifier::SlackNotifier.call(
      text: text,
      channel: "#debug",
      username: "ハムスター師匠",
      icon_emoji: ":hamster_dance:",
      force: true
    )
  end
end
