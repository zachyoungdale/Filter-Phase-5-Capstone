class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :coffee_shop
end
