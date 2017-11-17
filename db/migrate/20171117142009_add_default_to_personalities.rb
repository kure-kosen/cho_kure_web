class AddDefaultToPersonalities < ActiveRecord::Migration[5.1]
  def change
    change_column_default :personalities, :name, "名前を設定してください"
    change_column :personalities, :description, :text, null: true
  end
end
