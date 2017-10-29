Rails.application.routes.draw do
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  devise_for :personalities
  root to: "admin/personalities#index"
  namespace :admin do
    resources :personalities
  end
end
