class AddSnsToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :twitter_id, :string
    add_column :personalities, :facebook_id, :string
    add_column :personalities, :instagram_id, :string
  end
end
