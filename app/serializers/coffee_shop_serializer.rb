class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :latitude, :longitude, :website, :socials
  belongs_to :city
  has_many :reviews, serializer: CoffeeShopReviewsSerializer
end
