document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded() {

let productsContainer = document.getElementById("cardsContainer");

let listOfProducts = new ProductsList();
listOfProducts.getProductsList()
    .then(() => renderProducts(productsContainer,listOfProducts.items));

function renderProducts(productsContainer, productsList) {
    productsList.forEach(item => {
        var { id, name, imgUrl } = item;
        var card = document.createElement('div');
        card.classList.add('card');
        var img = document.createElement('img');
        img.setAttribute('src',imgUrl);
        card.appendChild(img);

        var prodName = document.createElement('p');
        prodName.innerText = name;
        card.appendChild(prodName);

        var moreBtn = document.createElement('div');
        moreBtn.classList.add('button');
        moreBtn.innerText = 'More';
        moreBtn.addEventListener('click',onBtnClick());
        card.appendChild(moreBtn);

        productsContainer.appendChild(card);

        function onBtnClick() {
            return function() {
                window.localStorage.setItem("productId",id);
                console.log("Id conform click:", id);
                window.open("./productDetails.html","_blank");
            }
        }
    }) // end of forEach
} 

} // end of function onHtmlLoaded()