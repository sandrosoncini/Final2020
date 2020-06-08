class AddUserRefToAuctionAndBid < ActiveRecord::Migration[6.0]
  def change
    add_reference :auctions, :user, null: false, foreign_key: true
    add_reference :bids, :user, null: false, foreign_key: true
  end
end
