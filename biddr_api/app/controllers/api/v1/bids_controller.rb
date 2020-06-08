class Api::V1::BidsController < ApplicationController

    def create 
        auction = Auction.find params[:auction_id]
        bid_params = params.require(:bid).permit(:bid_price, :user_id)
        bid = Bid.new bid_params
        # bid.user = current_user
        bid.auction = auction
        if bid.save  
            render json: bid
        else 
            render(
                json: { errors: bid.errors},
                status: 422
            )
        end

        
    end
end
