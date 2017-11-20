class AddLogoToCommunities < ActiveRecord::Migration[5.1]
  def change
    add_column :communities, :logo, :string
  end
end
