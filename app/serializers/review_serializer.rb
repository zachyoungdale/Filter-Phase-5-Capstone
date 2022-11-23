class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  has_one :user
  has_one :coffee_shop
end
