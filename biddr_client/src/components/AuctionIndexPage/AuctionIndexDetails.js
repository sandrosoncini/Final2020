import React from 'react';
import {Link} from 'react-router-dom'


export function AuctionIndexDetails (props) {
    return (
        <div>  
           <Link key= {props.id} to={`/auctions/${props.id}`}>
            <h1> {props.title}</h1>
            </Link>
           
            <small>{props.created_at}</small>
        </div>
    )
}