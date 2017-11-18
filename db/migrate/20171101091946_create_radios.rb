class CreateRadios < ActiveRecord::Migration[5.1]
  def change
    create_table :radios do |t|
      t.string :title, null: false, unique: true
      t.text :description, null: false
      t.string :mp3, null: false
      t.string :youtube_url
      t.string :podcast_url

      t.timestamps
    end
  end
end
