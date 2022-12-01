class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :user, :coffee_shop
  has_one :user
  has_one :coffee_shop
end
