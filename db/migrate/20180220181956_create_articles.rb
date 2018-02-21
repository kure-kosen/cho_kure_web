class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.string :image
      t.text :autosave_content
      t.datetime :published_at
      t.references :writer, index: true, null: false

      t.timestamps
    end

    add_foreign_key :articles, :personalities, column: :writer_id
  end
end
