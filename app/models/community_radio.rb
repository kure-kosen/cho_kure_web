# == Schema Information
#
# Table name: community_radios
#
#  id           :integer          not null, primary key
#  community_id :integer          not null
#  radio_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_community_radios_on_community_id  (community_id)
#  index_community_radios_on_radio_id      (radio_id)
#
# Foreign Keys
#
#  fk_rails_...  (community_id => communities.id)
#  fk_rails_...  (radio_id => radios.id)
#

class CommunityRadio < ApplicationRecord
  belongs_to :community
  belongs_to :radio
end
