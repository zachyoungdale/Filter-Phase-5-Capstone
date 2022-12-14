class BookmarksController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index
        render json: Bookmark.all, status: :ok
    end

    def show
        bookmark = Bookmark.find(params[:id])
        render json: bookmark, status: :ok
    end

    def create
        bookmark = Bookmark.create(bookmark_params)
        if bookmark.valid?
        render json: bookmark, status: :created
        else
            render json: {Error: "You have already bookmarked this shop!"}, status: :unprocessable_entity
        end
    end

    def destroy
        bookmark = Bookmark.find(params[:id])
        bookmark.destroy
        head :no_content
    end

    private

    def bookmark_params
        params.permit(:user_id, :coffee_shop_id)
    end
end
