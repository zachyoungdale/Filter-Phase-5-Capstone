class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def show 
        user = User.find(session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid? 
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index 
        render json: User.all, status: :ok
    end

    def update
        user = User.find(username: params[:username])
        if user 
            user.update(user_update_params)
            render json: user, status: :accepted
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :image)
    end

    def user_update_params
        params.permit(:username, :name, :image)
    end
end
