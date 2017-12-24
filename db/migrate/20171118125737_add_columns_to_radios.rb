class AddColumnsToRadios < ActiveRecord::Migration[5.1]
  def change
    add_column :radios, :published_at, :datetime
    add_column :radios, :duration, :integer, null: false
    add_column :radios, :size, :integer, null: false
  end
end
