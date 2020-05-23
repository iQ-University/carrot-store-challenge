function getDataFromServer() {
    fetch("http://localhost:3000/products").then(response).then(display);
}

getDataFromServer();

function getItem(data) {
    let itemsContainer = document.querySelector(".search-result");
    let item = document.createElement("div");
    let itemImg = document.createElement("img");
    itemImg.src = data.imgUrl;
    let itemName = document.createElement("p");
    itemName.innerText = data.name;
    let moreBtn = document.createElement("button");
    moreBtn.innerText = "More";
    moreBtn.addEventListener("click", function(){
        let href = window.location.href.replace("carrotlist.html", "details.html");
        location = href + "?id=" + data.id;
    })

    itemsContainer.appendChild(item);
    item.appendChild(itemImg);
    item.appendChild(itemName);
    itemName.appendChild(moreBtn);
}

function response(response) {
    return response.json();
}

function display(data) {
    for(let i = 0; i < data.length; i++) {
        let item = data[i];
        getItem(item);
    }
}
