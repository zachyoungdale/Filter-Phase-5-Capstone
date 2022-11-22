class CoffeeShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :socials
  belongs_to :city
end
