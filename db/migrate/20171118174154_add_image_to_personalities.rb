class AddImageToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :image, :string, null: false
  end
end
