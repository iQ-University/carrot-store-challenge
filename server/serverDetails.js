function getDataFromServer(productId) {
    fetch("http://localhost:3000/products/" + productId).then(response).then(display);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let productId = getParameterByName("id", window.location.search);
/* if(productId === null) {
    productId = "0";
} */

getDataFromServer(productId);

function getItemDetails(data) {
    let itemImg = document.querySelector(".carrot");
    itemImg.src = data.imgUrl;
    let itemTitle = document.querySelector(".item-title");
    itemTitle.innerText = data.name;
    let itemDescription = document.querySelector(".item-description");
    itemDescription.innerText = data.description;
    let itemPrice = document.querySelector(".price");
    itemPrice.innerText = " " + data.price;
    let itemCurrency = document.querySelector(".currency");
    itemCurrency.innerText = data.currency;
}

function getUserData(user) {
    let commentsContainer = document.querySelector(".comments-container");
    
    let comment = document.createElement("div");
    let userImg = document.createElement("img");
    userImg.src = user.userImgUrl;
    let userComment = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = user.user;
    let text = document.createElement("p");
    text.innerText = user.comment;

    commentsContainer.appendChild(comment);
    comment.appendChild(userImg);
    comment.appendChild(userComment);
    userComment.appendChild(name);
    userComment.appendChild(text);
}

function response(response) {
    return response.json();
}

function display(data) {
    getItemDetails(data);
    for(let i = 0; i < data.comments.length; i++) {
        let user = data.comments[i];
        getUserData(user);
    }
}