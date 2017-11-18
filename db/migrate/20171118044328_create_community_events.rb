class CreateCommunityEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :community_events do |t|
      t.references :community, foreign_key: true, null: false
      t.references :event, foreign_key: true, null: false

      t.timestamps
    end
  end
end
