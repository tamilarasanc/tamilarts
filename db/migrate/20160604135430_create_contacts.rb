class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.integer :mobile_number
      t.text :comment
      t.timestamps
    end
  end
end
