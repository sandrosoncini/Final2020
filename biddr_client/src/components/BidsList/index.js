import React from 'react';


export function BidsList({ bids }) {
  if (!bids) {
    bids = []
  }
  //const { bids } = props;
  return(
    <ul>
      {bids.map( bid => {
        return(
          <li key={bid.id}>
            
              {bid.bid_price}
          </li>
        )
      })}
    </ul>
  )
}