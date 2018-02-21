# == Schema Information
#
# Table name: articles
#
#  id               :integer          not null, primary key
#  title            :string(255)
#  content          :text(65535)
#  image            :string(255)
#  autosave_content :text(65535)
#  published_at     :datetime
#  writer_id        :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_articles_on_writer_id  (writer_id)
#
# Foreign Keys
#
#  fk_rails_...  (writer_id => personalities.id)
#

class Article < ApplicationRecord
  include Publishable

  mount_uploader :image, ArticleImageUploader

  acts_as_taggable

  belongs_to :writer, class_name: "Personality"
end
