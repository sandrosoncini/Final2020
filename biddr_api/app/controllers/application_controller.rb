class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def authenticate_user!
        unless user_signed_in?
          flash[:danger] = "You need to be signed in first!"
          render(
              json: {errors: "Not Authorize"},
              status: 401
          )
        end
    end

    def user_signed_in?
        current_user.present?
    end


    def current_user
        if session[:user_id].present?
          @current_user ||= User.find session[:user_id]
        end
    end
end
