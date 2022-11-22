class City < ApplicationRecord
    has_many :coffee_shops
    validates :name, presence: true
    validates :name, uniqueness: true
end
