class UsersController < ApplicationController
    skip_before_action :authorized, only: [:show, :create]

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
            user.update!(name: params[:name], username: params[:username])
            render json: user, status: :accepted
        end
    end

    def destroy
        user = User.find(session[:user_id])
        if user
            user.destroy
            session.delete :user_id
            head :no_content
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :image, :admin)
    end

    def user_update_params
        params.permit(:username, :name, :password, :password_confirmation)
    end
end
