class CreateAlexas < ActiveRecord::Migration[5.1]
  def change
    create_table :alexas do |t|

      t.timestamps
    end
  end
end
