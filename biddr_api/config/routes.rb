Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions do
        resources :bids, only: [:create]
      end
      resource :session, only: [:create, :destroy]
      # get("/users/current", to: "users#current")
      resources :users, only: [:create]
    end
  end 


end
