Rails.application.routes.draw do
  mount_roboto

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  devise_for :personalities

  namespace :front, path: "/" do
    root :to => redirect("/app")
    get "/podcast", to: "podcast#index"

    get "/app(/*other)", to: "app#index"  # For vue
  end

  namespace :api, format: "json" do
    namespace :v1 do
      resources :personalities, only: [:index, :show]
      resources :communities, only: [:index, :show]
      resources :events, only: [:index, :show]
      resources :radios, only: [:index, :show]
    end
  end

  namespace :admin do
    root to: "dashboard#index"
    resources :personalities
    resources :communities
    resources :events
    resources :radios
  end
end
