class AddImageToRadios < ActiveRecord::Migration[5.1]
  def change
    add_column :radios, :image, :string
  end
end
