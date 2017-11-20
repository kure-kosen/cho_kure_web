class CreateCommunityRadios < ActiveRecord::Migration[5.1]
  def change
    create_table :community_radios do |t|
      t.references :community, foreign_key: true, null: false
      t.references :radio, foreign_key: true, null: false

      t.timestamps
    end
  end
end
