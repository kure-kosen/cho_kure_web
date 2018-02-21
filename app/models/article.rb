# == Schema Information
#
# Table name: articles
#
#  id               :integer          not null, primary key
#  title            :string(255)
#  content          :text(65535)
#  autosave_content :text(65535)
#  published_at     :datetime
#  author_id        :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_articles_on_author_id  (author_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => personalities.id)
#

class Article < ApplicationRecord
  include Publishable

  belongs_to :author, class_name: "Personality"
end
