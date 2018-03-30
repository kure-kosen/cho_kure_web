class Notifier::SlackNotifier
  def self.call(text:, channel:, username:, icon_emoji:, force: false)
    return unless Rails.env.production? || Rails.env.staging? || force

    Slack::Notifier.new(ENV["SLACK_WEBHOOK_URL"]).
      post(
        text: text,
        channel: channel,
        icon_emoji: icon_emoji,
        username: username,
      )
  end
end
