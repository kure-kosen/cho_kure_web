class AddDigestMp3ToRadios < ActiveRecord::Migration[5.1]
  def change
    add_column :radios, :digest_mp3, :string
  end
end
