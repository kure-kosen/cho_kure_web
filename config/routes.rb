Rails.application.routes.draw do
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
    resources :personalities, except: [:new, :create]
    resources :communities
    resources :events
    resources :radios
    resources :jargons
  end
end
