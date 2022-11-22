class CoffeeShopsController < ApplicationController
    
    def index
        render json: CoffeeShop.all, status: :ok
    end

    def show
        coffee_shop = CoffeeShop.find(params[:id])
        render json: coffee_shop, status: :ok
    end

    def create
        coffee_shop = CoffeeShop.create(coffee_params)
        if coffee_shop.valid?
            render json: coffee_shop, status: :created
        else
            render json: {error: "Coffee Shop invalid"}, status: :unprocessable_entity
        end
    end

    def update
        coffee_shop = CoffeeShop.find(params[:id])
        if coffee_shop
            coffee_shop.update(coffee_params)
        else
            render json: {error: "Coffee Shop invalid"}, status: :unprocessable_entity
        end
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
