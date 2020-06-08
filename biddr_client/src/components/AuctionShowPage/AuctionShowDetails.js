import React from 'react';

export function AuctionShowDetails (props) {
    return (
        <div>
            <h2>{props.title}</h2>
                <p>
                    {props.description}<br/>
                </p>
                <p>
                    <small>{props.ends_at.toLocaleString()}</small> 
                </p>
        </div>
    )
}