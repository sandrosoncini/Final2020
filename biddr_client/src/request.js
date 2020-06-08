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