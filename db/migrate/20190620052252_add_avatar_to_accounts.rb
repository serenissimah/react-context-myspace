class AddAvatarToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :avatar, :string
  end
end
