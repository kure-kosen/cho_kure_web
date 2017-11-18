# == Schema Information
#
# Table name: host_events
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_host_events_on_event_id  (event_id)
#  index_host_events_on_host_id   (host_id)
#
# Foreign Keys
#
#  fk_rails_...  (event_id => events.id)
#  fk_rails_...  (host_id => communities.id)
#

class HostEvent < ApplicationRecord
  belongs_to :host, class_name: "Community"
  belongs_to :event
end
