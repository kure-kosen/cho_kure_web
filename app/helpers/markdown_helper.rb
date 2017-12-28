module MarkdownHelper
  class << self
    def markdown(text)
      text ||= ""

      unless @markdown
        renderer = Redcarpet::Render::HTML.new(filter_html: true, hard_wrap: true)
        @markdown = Redcarpet::Markdown.new(renderer, tables: true)
      end

      @markdown.render(text).html_safe
    end
  end
end
