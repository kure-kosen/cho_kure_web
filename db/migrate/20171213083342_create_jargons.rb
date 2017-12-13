class CreateJargons < ActiveRecord::Migration[5.1]
  def change
    create_table :jargons do |t|
      t.string :name
      t.text :description
      t.integer :radio_id
      t.integer :major

      t.timestamps
    end
  end
end
