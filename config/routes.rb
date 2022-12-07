Rails.application.routes.draw do
    resources :bookmarks, except: :update
    resources :reviews, except: :update
    resources :coffee_shops
    resources :cities, only: [:index, :show, :create]
    resources :users, only: [:show, :create, :update, :destroy]
    resources :sessions
    get "/auth", to: "users#show"
    get "/users/:id/reviewed_shops", to: "users#user_reviewed_shops"
    get "/users/:id/bookmarks", to: "users#user_bookmarks"
    get "/coffee_shops/:id/reviews", to: "coffee_shops#shop_reviews"
    get "/users/:id/bookmarked_shops", to: "users#user_bookmarked_shops"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end
