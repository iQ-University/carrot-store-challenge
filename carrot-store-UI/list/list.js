function getDataFromServerForListPage(){
    fetch("http://localhost:3000/products")
    .then(getResponse)
    .then(showData)
}

getDataFromServerForListPage();

function getResponse(response){
    return response.json();
}

function showData(data){
    console.log(data);

    for(var i = 0; i < data.length; i++){
        var item = data[i];
        getItem(item);
    }
}

function getItem(data){

    let productsContainer = document.querySelector(".product-imgs");

    let productContainer = document.createElement("div");

    let itemImg = document.createElement("img");
    itemImg.src = data.imgUrl;

    let productName = document.createElement("p");
    productName.innerText = data.name;

    let moreBtn = document.createElement("button");
    moreBtn.innerText = "More";

    let goToDetailsLink = document.createElement("a");
    goToDetailsLink.href = "/details/details.html" + "?id=" + data.id;
    
    productsContainer.appendChild(productContainer);
    productContainer.appendChild(itemImg);
    productContainer.appendChild(productName);
    productContainer.appendChild(goToDetailsLink);
    goToDetailsLink.appendChild(moreBtn);
}