class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :password_digest, :username
end
