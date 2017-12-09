Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'communities/index'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'communities/show'
    end
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  devise_for :personalities

  root to: "admin/personalities#index"

  namespace :front, path: "/" do
    get "/podcast", to: "podcast#index"
  end

  namespace :admin do
    root to: "dashboard#index"
    resources :personalities
    resources :communities
    resources :events
    resources :radios
  end
end
