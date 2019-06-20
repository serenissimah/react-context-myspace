class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.string :location

      t.timestamps
    end
  end
end
