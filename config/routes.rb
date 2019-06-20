Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :accounts, only: [:index, :show, :update]
    get 'my_account', to: 'account#accounts'
  end
end
