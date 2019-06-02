# == Schema Information
#
# Table name: personalities
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  name                   :string(255)      default("名前を設定してください"), not null
#  description            :text(65535)
#  role                   :integer          default(0), not null
#  image                  :string(255)
#  nickname               :string(255)
#
# Indexes
#
#  index_personalities_on_email                 (email) UNIQUE
#  index_personalities_on_reset_password_token  (reset_password_token) UNIQUE
#

class PersonalitySerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :description, :image, :tag_list

  has_many :radios
  has_many :published_radios do
    object.radios.published
  end

  def image
    ActionController::Base.helpers.image_url(object.image_url(:thumb))
  end

  def description
    MarkdownHelper.markdown(object.description)
  end
end
