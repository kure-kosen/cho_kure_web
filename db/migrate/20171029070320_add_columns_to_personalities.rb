class AddColumnsToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :name, :string, null: false, before: :email
    add_column :personalities, :description, :text, null: false, after: :name
    add_column :personalities, :role, :integer, null: false, default: 0, after: :description
  end
end
