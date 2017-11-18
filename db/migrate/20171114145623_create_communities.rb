class CreateCommunities < ActiveRecord::Migration[5.1]
  def change
    create_table :communities do |t|
      t.string :name, null: false
      t.string :url
      t.text :description, null: false

      t.timestamps
    end
  end
end
