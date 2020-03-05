document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded() {

let productsContainer = document.getElementById("cardsContainer");

let listOfProducts = new ProductsList();
listOfProducts.getProductsList()
    .then(() => renderProducts(productsContainer,listOfProducts.items));

function renderProducts(productsContainer, productsList) {
    productsList.forEach(item => {
        var { name, imgUrl } = item;
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img 
                src=${imgUrl} 
                height="240"
                width="320" />
            <p>${name}</p>
            <div class="button">More</div>    
        `
        productsContainer.appendChild(card);
    })
} 

} // end of function onHtmlLoaded()