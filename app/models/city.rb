class City < ApplicationRecord
    has_many :coffee_shops
    validates :name, presence: true
end
