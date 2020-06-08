import React from 'react';

function NewAuctionForm(props, ) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    props.createAuction({
      title: formData.get('title'),
      description: formData.get('description'),
      ends_at: formData.get('ends_at'),
      reserve_price: formData.get('reserve_price'),
    })
  }

  return(
    <form className="NewAuctionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br/>
        <input name="title" id="title"></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br/>
        <textarea name="description" id="description"></textarea>
      </div>
      <div>
        <label htmlFor="ends_at">Ends at</label>
        <br/>
        <input name="ends_at" id="ends_at"></input>
      </div>
      <div>
        <label htmlFor="reserve_price">Reserve Price</label>
        <br/>
        <input name="reserve_price" id="reserve_price"></input>
      </div>
      <div>
        <input type="submit" value="submit"/>
      </div>
    </form>
  )
}

export default NewAuctionForm