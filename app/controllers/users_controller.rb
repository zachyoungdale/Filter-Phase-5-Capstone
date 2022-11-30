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

    def user_reviewed_shops
        user = User.find(session[:user_id])
        if user
            user_reviewed_shops = user.reviewed_shops
            render json: user_reviewed_shops, status: :ok
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end

    def user_bookmarks
        user = User.find(session[:user_id])
        if user
            user_bookmarks = user.bookmarks
            render json: user_bookmarks, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def user_bookmarked_shops
        user = User.find(session[:user_id])
        if user
            user_bookmarked_shops = user.bookmarked_shops
            render json: user_bookmarked_shops, status: :ok
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def index 
        render json: User.all, status: :ok
    end

    def update
        user = User.find(session[:user_id])
        if user 
            user.update!(user_update_params)
            render json: user, status: :accepted
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :image)
    end

    def user_update_params
        params.permit(:username, :name, :image, :password, :password_confirmation)
    end
end
