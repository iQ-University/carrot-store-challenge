const apiUrl = 'http://localhost:3000/products';

class ProductsList {
    constructor() {
        this.items = [];
    }

    getProductsList() {
        const self = this;
        return fetch (apiUrl, 
            {method : "GET"})
            .then( response => response.json())
            .then (data => {
                data.forEach(element => {
                    self.items.push(element);
                });
            })
    }
};


