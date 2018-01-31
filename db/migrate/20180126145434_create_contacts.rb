class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.integer :corner, null: false
      t.string :message, null: false
      t.string :nickname
      t.string :name
      t.integer :department, null: false
      t.integer :grade

      t.timestamps
    end
  end
end
