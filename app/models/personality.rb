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
#  twitter_id             :string(255)
#  facebook_id            :string(255)
#  instagram_id           :string(255)
#
# Indexes
#
#  index_personalities_on_email                 (email) UNIQUE
#  index_personalities_on_reset_password_token  (reset_password_token) UNIQUE
#

class Personality < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable

  bind_inum :role, PersonalityRoles, prefix: nil

  mount_uploader :image, PersonalityImageUploader

  acts_as_taggable

  has_many :radio_personalities, dependent: :destroy
  has_many :radios, through: :radio_personalities

  scope :on_public, -> {
    where.not(role: [PersonalityRoles::SECRET, PersonalityRoles::REVIEWER])
  }

  scope :appeared, -> {
    where(
      id: RadioPersonality.where(
        radio_id: Radio.published.select(:id),
      ).select(:personality_id),
    )
  }

  def member?
    admin? || editor? || reviewer? || secret?
  end

  def allow_change_role?
    admin? || secret?
  end

  def change_role_to_admin!
    return if self.admin?
    self.role = PersonalityRoles::ADMIN
    save!
  end

  def change_role_to_secret!
    return if self.secret?
    self.role = PersonalityRoles::SECRET
    save!
  end

  def change_role_to_reviewer!
    return if self.reviewer?
    self.role = PersonalityRoles::REVIEWER
    save!
  end

  def change_role_to_editor!
    return if self.editor?
    self.role = PersonalityRoles::EDITOR
    save!
  end

  def change_role_to_guest!
    return if self.guest?
    self.role = PersonalityRoles::GUEST
    save!
  end
end
