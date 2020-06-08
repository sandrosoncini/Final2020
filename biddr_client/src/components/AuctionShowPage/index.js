import React, { Component } from 'react';
import {AuctionShowDetails} from './AuctionShowDetails'
import {NewBidForm} from '../NewBidForm/index'

import { Auction, Bid } from '../../request'

class AuctionShowPage extends Component {

    constructor(props) {
        super(props); 
        this.state = {
          auction: {},
          bid: {}
  
        }
        this.createBid = this.createBid.bind(this);
    }

    componentDidMount() {
        Auction.get(this.props.match.params.id).then(auction => {
          this.setState((state) => {
            return {
              auction
            }
          })
          console.log(auction)
        })
      }
      
      createBid(params) {
          console.log('createBid params: ',params)
          console.log(this.props)
        Bid.create(params, this.props.match.id).then((auction) => {
          this.props.history.push(`/auctions/${this.props.match.id}`)
        })
      }  

    render () {
        return (
            <div>
                <h1>Auction Show Page</h1>
                <AuctionShowDetails
                    title={this.state.auction.title}
                    description={this.state.auction.description}
                    reserve_price={this.state.auction.reserve_price}
                    ends_at={new Date(this.state.auction.ends_at)}
                    created_at={new Date(this.state.auction.created_at)}
                />

                <NewBidForm createBid={this.createBid}/>
            </div>
        )
    }
}       

export default AuctionShowPage