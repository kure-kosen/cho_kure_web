class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.text :autosave_content
      t.datetime :published_at
      t.references :author, index: true, null: false

      t.timestamps
    end

    add_foreign_key :articles, :personalities, column: :author_id
  end
end
