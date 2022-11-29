class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :password_digest, :username

  has_many :reviews
  has_many :bookmarks
end
