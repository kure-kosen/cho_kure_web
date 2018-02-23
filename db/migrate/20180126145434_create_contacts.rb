class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.boolean :readable, null: false, dafault: false
      t.integer :corner, null: false, default: 0
      t.string :message, null: false
      t.string :nickname
      t.string :name
      t.integer :department, null: false, default: 0
      t.integer :grade, null: false, default: 0

      t.timestamps
    end
  end
end
