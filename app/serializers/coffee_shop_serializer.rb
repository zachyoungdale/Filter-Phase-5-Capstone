class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :socials
  belongs_to :city
  has_many :reviews
end
