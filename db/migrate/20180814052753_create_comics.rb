class CreateComics < ActiveRecord::Migration[5.1]
  def change
    create_table :comics do |t|
      t.string :image, null: false
      t.references :radio, foreign_key: true, null: false

      t.timestamps
    end
  end
end
