class CreateRadioPersonalities < ActiveRecord::Migration[5.1]
  def change
    create_table :radio_personalities do |t|
      t.references :radio, foreign_key: true, null: false
      t.references :personality, foreign_key: true, null: false

      t.timestamps
    end
  end
end
