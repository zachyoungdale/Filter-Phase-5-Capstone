class BookmarkSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :coffee_shop
end
