class Bookmark < ApplicationRecord
  belongs_to :user
  belongs_to :coffee_shop

  validates :coffee_shop_id, uniqueness: {scope: :user_id}
end
