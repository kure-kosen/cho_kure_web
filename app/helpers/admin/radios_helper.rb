module Admin::RadiosHelper
  def status_badge(radio)
    content_tag(:span, class: "badge badge-primary") do
      if radio.publish?
        "公開"
      elsif radio.reservation?
        "予約投稿"
      elsif radio.draft?
        "下書き"
      end
    end
  end
end
