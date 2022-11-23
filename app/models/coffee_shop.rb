class CoffeeShop < ApplicationRecord
    belongs_to :city
    has_many :reviews, dependent: :destroy
    has_many :bookmarks, dependent: :destroy
    has_many :users, through: :reviews
    has_many :users, through: :bookmarks
    validates_presence_of :name, :address, :city_id
    validates :address, uniqueness: true
end
