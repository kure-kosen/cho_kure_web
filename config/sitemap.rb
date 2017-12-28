# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://www.kure-rad.io"

SitemapGenerator::Sitemap.create do
  # Add Top
  add "/app", priority: 0.9, changefreq: "daily"

  # Add '/personalities'
  add "/app/personalities", priority: 0.7, changefreq: "daily"

  # Add public personalities:
  Personality.on_public.each do |personality|
    add "/personalities/#{personality.id}", lastmod: personality.updated_at
  end

  # Add published radios:
  Radio.published.each do |radio|
    add "/app/radios/#{radio.id}", lastmod: radio.updated_at
  end

  # Add ちょっくれとは
  add "/app/about"

  # Add お問い合わせ
  add "/app/contact"
end
