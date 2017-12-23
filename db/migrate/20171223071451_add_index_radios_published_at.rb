class AddIndexRadiosPublishedAt < ActiveRecord::Migration[5.1]
  def change
    add_index :radios, :published_at
  end
end
