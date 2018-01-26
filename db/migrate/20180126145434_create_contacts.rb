class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.integer :corner
      t.string :message
      t.string :nickname
      t.string :name
      t.integer :department
      t.integer :grade

      t.timestamps
    end
  end
end
