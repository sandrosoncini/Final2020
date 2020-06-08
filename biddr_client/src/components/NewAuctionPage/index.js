import React, { Component } from 'react';
import NewAuctionForm from '../NewAuctionForm';
import { Auction } from '../../request';

class NewAuctionPage extends Component {

  constructor(props) {
    super(props)

    this.createAuction = this.createAuction.bind(this);
  }

  createAuction(params) {
    Auction.create(params).then((auction) => {
      this.props.history.push(`/auctions/${auction.id}`)
    })
  }

  render() {
    return(
      <main>
        <h1>New Auction page</h1>
        <NewAuctionForm createAuction={this.createAuction}/>
      </main>
    )
  }
}

export default NewAuctionPage
