document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded() {

    let productsContainer = document.getElementById("cardsContainer");

    let listOfProducts = new ProductsList();
    listOfProducts.getProductsList()
        .then(() => renderProducts(productsContainer, listOfProducts.items));

    function renderProducts(productsContainer, productsList) {
        productsList.forEach(item => {
            let { id, name, imgUrl } = item;
            let card = document.createElement('div');
            card.classList.add('card');
            let img = document.createElement('img');
            img.setAttribute('src', imgUrl);
            card.appendChild(img);

            let prodName = document.createElement('p');
            prodName.innerText = name;
            card.appendChild(prodName);

            let moreBtn = document.createElement('div');
            moreBtn.classList.add('button');
            moreBtn.innerText = 'More';
            moreBtn.addEventListener('click', onBtnClick());
            card.appendChild(moreBtn);

            productsContainer.appendChild(card);

            function onBtnClick() {
                return function () {
                    window.localStorage.setItem("productId", id);
                    console.log("Id conform click:", id);
                    window.open("./productDetails.html", "_blank");
                }
            }
        }) // end of forEach
    }

} // end of function onHtmlLoaded()