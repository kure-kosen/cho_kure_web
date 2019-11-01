class AddAffiliationToPersonalities < ActiveRecord::Migration[5.1]
  def change
    add_column :personalities, :affiliation_name, :string
    add_column :personalities, :affiliation_details, :string
  end
end
