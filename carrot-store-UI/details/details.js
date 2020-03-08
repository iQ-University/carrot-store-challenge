function getDataFromServer(productId) {
    fetch("http://localhost:3000/products/" + productId)
        .then(displayResponse)
        .then(displayData);
}


// logic to get de id from query param
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


console.log("query param: " + window.location.search)


productId = getParameterByName("id", window.location.search);
console.log("productId is " + productId);

if (productId === null) {
    productId = "0"
} 

getDataFromServer(productId);

function displayResponse(response) {
    return response.json();
}

function displayData(data) {
    console.log(data);
    getProductDetails(data);

    for (let i = 0; i < data.comments.length; i++) {
        let user = data.comments[i];
        getUsersData(user);
    }
}

function getProductDetails(data) {

    let productTitle = document.querySelector(".product-title");
    productTitle.innerText = data.name;

    let productDescription = document.querySelector(".product-description");
    productDescription.innerText = data.description;

    let productImg = document.querySelector(".product-img")
    productImg.src = data.imgUrl;

    let productPrice = document.querySelector(".product-price");
    productPrice.innerText = "Price: " + data.price;

    let productCurrency = document.querySelector(".product-currency");
    productCurrency.innerText = data.currency;

}

function getUsersData(user) {

    let commentsSection = document.querySelector(".comments-section");

    let userComment = document.createElement("div");

    let userImg = document.createElement("img");
    userImg.src = user.userImgUrl;

    let textCommentContainer = document.createElement("div");
    textCommentContainer.classList.add("user-comment");

    let userName = document.createElement("p");
    userName.innerText = user.user;

    let userComm = document.createElement("p");
    userComm.innerText = user.comment;

    commentsSection.appendChild(userComment);
    userComment.appendChild(userImg);
    userComment.appendChild(textCommentContainer);
    textCommentContainer.appendChild(userName);
    textCommentContainer.appendChild(userComm);
}