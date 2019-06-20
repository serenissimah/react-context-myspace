class Api::AccountsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_account(current_user.liked_accounts)
  end

  def update
    current_user.liked_accounts << params[:id].to_i
    current_user.save
  end

  def my_account
    render json: User.liked(current_user.liked_accounts)
  end
  
end
