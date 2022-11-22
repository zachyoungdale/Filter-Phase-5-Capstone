class CitiesController < ApplicationController

    def index 
        render json: City.all, status: :ok
    end

    def show
        city = City.find(params[:id])
        render json: city, status: :ok
    end

    def create
        city = City.create(city_params)
        if city.valid?
            render json: city, status: :created
        else
            render json: {error: "Invalid city"}, status: :unprocessable_entity
        end
    end

    private

    def city_params
        params.permit(:name)
    end
end
