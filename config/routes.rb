Rails.application.routes.draw do
  devise_for :personalities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "admin/personalities#index"
  namespace "admin" do
    resources :personalities
  end
end
