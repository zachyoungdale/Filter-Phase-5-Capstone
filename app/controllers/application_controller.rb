class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    include ActionController::Cookies
    before_action :authorized

    def authorized
        return render json: {error: "not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    private

    def render_not_found(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
    end
    
    def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
