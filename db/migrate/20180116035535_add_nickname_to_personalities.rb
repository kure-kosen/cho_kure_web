class AddNicknameToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :nickname, :string
  end
end
