# == Schema Information
#
# Table name: community_events
#
#  id           :integer          not null, primary key
#  community_id :integer          not null
#  event_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_community_events_on_community_id  (community_id)
#  index_community_events_on_event_id      (event_id)
#
# Foreign Keys
#
#  fk_rails_...  (community_id => communities.id)
#  fk_rails_...  (event_id => events.id)
#

class CommunityEvent < ApplicationRecord
  belongs_to :community
  belongs_to :event
end
