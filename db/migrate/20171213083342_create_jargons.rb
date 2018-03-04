class CreateJargons < ActiveRecord::Migration[5.1]
  def change
    create_table :jargons do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.references :radio, foreign_key: true, null: false
      t.integer :major, null: false

      t.timestamps

      t.index :name, unique: true
    end
  end
end
