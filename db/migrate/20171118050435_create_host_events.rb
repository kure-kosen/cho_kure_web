class CreateHostEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :host_events do |t|
      t.references :host, index: true, null: false
      t.references :event, foreign_key: true

      t.timestamps
    end

    add_foreign_key :host_events, :communities, column: :host_id
  end
end
