Rails.application.routes.draw do
  mount_roboto

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  devise_for :personalities, controllers: {
    sessions: "admin/devise/sessions",
    passwords: "admin/devise/passwords",
  }

  namespace :front, path: "/" do
    root to: redirect("/app")
    get "/podcast", to: "podcast#index"

    get "/app(/*other)", to: "app#index" # For vue
  end

  namespace :api, format: "json" do
    namespace :v1 do
      resources :personalities, only: [:index, :show] do
        collection do
          get :appeared
        end
        member do
          get :new_radios
        end
      end
      resources :communities, only: [:index, :show]
      resources :events, only: [:index, :show]
      resources :radios, only: [:index, :show]
    end
  end

  namespace :admin do
    root to: "dashboard#index"
    resources :personalities do
      member do
        patch :change_role_to_guest
        patch :change_role_to_editor
        patch :change_role_to_secret
        patch :change_role_to_admin
      end
    end
    resources :communities
    resources :events
    resources :radios
    resources :jargons
    resources :articles, except: [:create] do
      collection do
        post :upload_image
      end
    end
  end
end
