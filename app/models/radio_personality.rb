# == Schema Information
#
# Table name: radio_personalities
#
#  id             :integer          not null, primary key
#  radio_id       :integer          not null
#  personality_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
# Indexes
#
#  index_radio_personalities_on_personality_id  (personality_id)
#  index_radio_personalities_on_radio_id        (radio_id)
#
# Foreign Keys
#
#  fk_rails_...  (personality_id => personalities.id)
#  fk_rails_...  (radio_id => radios.id)
#

class RadioPersonality < ApplicationRecord
  belongs_to :radio
  belongs_to :personality
end
