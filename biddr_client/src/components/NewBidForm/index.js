import React from 'react';

export function NewBidForm(props) {
    
  function handleSubmit(event) {
    console.log(props)
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    
    props.createBid({
      bid_price: formData.get('bid_price')
    })
  }

  return(
    <form className="NewBidForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bid_price">Bid</label>
        <br/>
        <input name="bid_price" id="bid_price"></input>
      </div>
      <div>
        <input type="submit" value="submit"/>
      </div>
    </form>
  )
}

