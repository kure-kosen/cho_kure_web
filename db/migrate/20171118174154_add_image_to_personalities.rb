class AddImageToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :image, :string
  end
end
