const BASE_URL = `http://localhost:3000/api/v1`

export const Auction = {
    index() {
        return fetch(`${BASE_URL}/auctions`, {
            credentials: 'include'
        }).then(res => {
            console.log(res);
            return res.json();
        })
    },

    get(id) {
        return fetch(`${BASE_URL}/auctions/${id}`, {
            credentials: 'include'
        }).then(res => res.json());
    }
}


export const Bid = {

    // create(params) {
    //     console.log('request: ', params)
    //     return fetch(`${BASE_URL}/auctions/${id}/bids`, {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(params)
    //     }).then(res => res.json());
    // },
}

export const Session = {
    create(params) {
        // params should be an object with { email: 'some@gmail.com', password: 'supersecret' }
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((res) => {
            return res.json();
        })
    }

}

export const User = {
    current() {
        return fetch(`${BASE_URL}/users/current`, {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json());
    },
}

