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
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  name                   :string(255)      not null
#  description            :text(65535)      not null
#  role                   :integer          default(0), not null
#
# Indexes
#
#  index_personalities_on_confirmation_token    (confirmation_token) UNIQUE
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
         :validatable,
         :confirmable

  bind_inum :role, PersonalityRoles
end
