class CreateJargons < ActiveRecord::Migration[5.1]
  def change
    add_column :jargons, :image, :string
  end
end
