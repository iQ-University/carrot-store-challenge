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

    static async getProductDetails(id) {
        const productApiUrl = productsApiUrl + `/${id}`;
        const response = await fetch(productApiUrl);
        console.log("Response:", response);
        const productData = await response.json();
        console.log("Body data:", productData);
        return productData;
    }

};


