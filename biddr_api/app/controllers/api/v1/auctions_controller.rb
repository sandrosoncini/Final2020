class Api::V1::AuctionsController < ApplicationController
    
    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions)
   end

   def show 
        
        auction = Auction.find(params[:id])
        render(json: auction)
   end

   def create
        auction = Auction.new(params.require(:auction).permit(:title, :description, :reserve_price, :ends_at, :user_id)) 
        # auction.user = current_user
        if auction.save  
            render json: auction
        else 
            render(
                json: { errors: auction.errors},
                status: 422
            )
        end
    end

end
