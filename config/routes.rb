Rails.application.routes.draw do
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  devise_for :personalities
  root to: "admin/personalities#index"
  namespace :admin do
    root to: "dashboard#index"
    resources :personalities, except: [:new, :create]
  end
end
