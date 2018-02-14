class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.integer :corner, null: false
      t.boolean :readable, null: false, dafault: false
      t.string :message, null: false
      t.string :nickname
      t.string :name
      t.integer :department, null: false
      t.integer :grade

      t.timestamps
    end
  end
end
