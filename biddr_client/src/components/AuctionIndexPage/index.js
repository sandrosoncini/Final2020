import React, { Component } from 'react';
import {AuctionIndexDetails} from './AuctionIndexDetails'
import {Auction } from '../../request'


class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
         auctions: []
        }
      }

    componentDidMount () {
        Auction.index().then(auctions => {
            this.setState((state) => {
              return {
                auctions
              }
            })
            console.log('AuctionIndexPage: ', auctions);
          })
    }  
    
    
    render () {

        const auctions = this.state.auctions.map( auction => {
            return(
                <AuctionIndexDetails 
                  title={auction.title}
                  created_at={auction.created_at}
                  id = {auction.id}
                /> 
            )
          })

        return (
            <div>
                <h1> Auction Index Page </h1>  
                <ul key = {auctions.id} >
                    {auctions}
                </ul>
            </div>
        )
    }
}

export default AuctionIndexPage