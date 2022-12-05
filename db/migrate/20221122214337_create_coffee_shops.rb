class CreateCoffeeShops < ActiveRecord::Migration[7.0]
  def change
    create_table :coffee_shops do |t|
      t.string :name
      t.string :address
      t.float :latitude
      t.float :longitude
      t.integer :city_id
      t.string :website
      t.string :socials

      t.timestamps
    end
  end
end
