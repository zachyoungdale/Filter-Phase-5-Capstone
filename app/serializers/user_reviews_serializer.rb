class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :coffee_shop
  has_one :user
  has_one :coffee_shop
end
