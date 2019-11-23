class RenameAffiliationColumnToPersonalities < ActiveRecord::Migration[5.1]
  def change
    rename_column :personalities, :affiliation_name, :organization
    rename_column :personalities, :affiliation_details, :position
  end
end
