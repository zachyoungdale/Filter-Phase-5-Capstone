Rails.application.routes.draw do
  resources :coffee_shops
  resources :cities, only: [:index, :show, :create]
  resources :users, only: [:show, :create, :update]
  resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
