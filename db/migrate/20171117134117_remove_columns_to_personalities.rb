class RemoveColumnsToPersonalities < ActiveRecord::Migration[5.1]
  def change
    remove_column :personalities, :confirmation_token, :string
    remove_column :personalities, :confirmed_at, :datetime
    remove_column :personalities, :confirmation_sent_at, :datetime
  end
end
