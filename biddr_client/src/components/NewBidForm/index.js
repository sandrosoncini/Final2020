import React from 'react';

function NewBidForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    props.createBid({
      title: formData.get('title'),
      body: formData.get('body')
    })
  }

  return(
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br/>
        <input name="title" id="title"></input>
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <br/>
        <textarea name="body" id="body"></textarea>
      </div>
      <div>
        <input type="submit" value="submit"/>
      </div>
    </form>
  )
}

export default NewQuestionForm