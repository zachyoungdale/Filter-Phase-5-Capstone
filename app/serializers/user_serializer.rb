class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :password_digest, :username

  has_many :reviews, serializer: UserReviewsSerializer
  has_many :bookmarks, serializer: UserBookmarksSerializer
end
