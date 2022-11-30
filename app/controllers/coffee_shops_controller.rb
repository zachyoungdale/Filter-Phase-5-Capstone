class CoffeeShopsController < ApplicationController
    
    def index
        render json: CoffeeShop.all, status: :ok
    end

    def show
        coffee_shop = CoffeeShop.find(params[:id])
        render json: coffee_shop, status: :ok
    end

    def create
        coffee_shop = CoffeeShop.create!(coffee_params)
        render json: coffee_shop, status: :created
    end

    def update
        coffee_shop = CoffeeShop.find(params[:id])
        coffee_shop.update!(coffee_params)
    end

    def destroy
        coffee_shop = CoffeeShop.find(params[:id])
        coffee_shop.destroy
        head :no_content
    end

    private

    def coffee_params
        params.permit(:name, :address, :city_id, :website, :socials)
    end
end
