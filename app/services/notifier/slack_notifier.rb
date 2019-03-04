class Notifier::SlackNotifier
  def self.call(text:, channel:, username:, icon_emoji:, force: false)
    Rails.logger.info("===================================")
    Rails.logger.info("class: #{self.class}")
    Rails.logger.info("text: #{text}")
    Rails.logger.info("channel: #{channel}")
    Rails.logger.info("username: #{username}")
    Rails.logger.info("icon_emoji: #{icon_emoji}")
    Rails.logger.info("force: #{force}")
    Rails.logger.info("===================================")

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
