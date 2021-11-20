Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:show]
    end
  end
  # Forward all get request to StaticController#index
  # Requests must be non-ajax and HTML mime format
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && !req.format.mtl?
  end

  root 'static#index'
end
