class Review < ApplicationRecord
  belongs_to :user
  belongs_to :coffee_shop
  validates_presence_of :rating, :content
  validates :rating, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :content, length: {minimum: 5}
end
