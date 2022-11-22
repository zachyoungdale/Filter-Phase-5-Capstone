class CoffeeShop < ApplicationRecord
    belongs_to :city
    validates_presence_of :name, :address, :city_id
    validates :address, uniqueness: true
end
