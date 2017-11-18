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
         :registerable,
         :recoverable,
         :rememberable,
         :trackable,
         :validatable

  bind_inum :role, PersonalityRoles

  has_many :radio_personalities, dependent: :destroy
  has_many :radios, through: :radio_personalities
end
