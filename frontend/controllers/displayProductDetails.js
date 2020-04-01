document.addEventListener('DOMContentLoaded', onHtmlLoaded);

async function onHtmlLoaded() {

    const id = window.localStorage.getItem("productId");

    let productDetailsContainer = document.getElementById("upperPageHalfMain");

    const productData = await Product.getProductDetails(id);
    renderProductDetails(productDetailsContainer, productData);

    function renderProductDetails(productDetailsContainer, productData) {
        let product = new Product(productData);

        let { name, description, price, currency, imgUrl, comments } = product;

        let productDetails = document.createElement("div");
        productDetails.classList.add("product__details");
        productDetails.innerHTML = `
        <img class="product__img" src=${imgUrl} />
        <div class="product__details__right">
            <h1>${name}</h1>
            <p>${description}</p>
            <div class="product__details__right__bottom">
                <p class="price_container">
                    Price: 
                    <a class="price">${price}${currency}</a>
                </p>
                <div class="button">
                    <a>Add to cart</a>
                    <img src="../images/shopping-cart-solid.svg" alt="shipping cart" height="24" width="24" />
                </div>
            </div>
        </div>
    `
        productDetailsContainer.appendChild(productDetails);

        let commentsContainer = document.createElement("div");
        commentsContainer.classList.add("comments__container");
        comments.forEach(item => {
            let { user, comment, userImgUrl } = item;
            let commentContainer = document.createElement("div");
            commentContainer.classList.add("comment__container");
            commentContainer.innerHTML = `
            <div class="picture__name">
                <img class="user__picture" src=${userImgUrl} />
                <div class="user__comment">
                    <p class="user__name">${user}</p>
                    <p class="web__comment">${comment}</p>
                </div>
            </div>    
            <p class="mobile__comment">${comment}</p>   
        `
            commentsContainer.appendChild(commentContainer);

        })

        productDetailsContainer.appendChild(commentsContainer);


    } // end of renderProductDetails

} // end of function onHtmlLoaded()