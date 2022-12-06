class CitiesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]

    def index 
        render json: City.all, status: :ok
    end

    def show
        city = City.find(params[:id])
        render json: city, status: :ok
    end

    def create
        city = City.create!(city_params)
        render json: city, status: :created
    end

    private

    def city_params
        params.permit(:name)
    end
end
