const productsApiUrl = 'http://localhost:3000/products';

class Product {
    constructor(productData) {
        this.id = productData.id,
        this.name = productData.name,
        this.description = productData.description,
        this.price = productData.price,
        this.currency = productData.currency,
        this.imgUrl = productData.imgUrl,
        this.comments = productData.comments
    }

    static getProductDetails(id) {
        const productApiUrl = productsApiUrl + `/${id}`;
        return fetch (productApiUrl, 
            {method : "GET"})
            .then( response => response.json());
    }

};


