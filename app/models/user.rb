class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :bookmarks, dependent: :destroy
    has_many :coffee_shops, through: :reviews
    has_many :coffee_shops, through: :bookmarks
    validates_presence_of :name, :username, :password
    validates :password, length: {minimum: 3}

    def reviewed_shops
        self.reviews.map { |review| review.coffee_shop } 
    end

    def bookmarked_shops
        self.bookmarks.map { |bookmark| bookmark.coffee_shop} 
    end
end
