const getButtonId = (idVal) => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

let clickedId = JSON.parse(localStorage.getItem("clickedId"));
let displayData = JSON.parse(localStorage.getItem("fetchedData"));

displayData.map((el) => {
  if (el.id == clickedId) {
    const markup = `
      <div class="product-details">
        <div class="product-left">
          <img id="prod-image" alt="" src="${el.imgUrl}"/>
        </div>
        <div class="product-right">
          <div class="description">
            <h3 id="prod-title">
              ${el.name}
            </h3>
            <p id="prod-description">
              ${el.description}
            </p>
          </div>
          <a href="" class="btn"
            >Add to cart<img
              src="../img/shopping-cart-solid.svg"
              style="width: 20px;"
          /></a>
        </div>
      </div>
`;
    document.getElementById("mata").innerHTML = markup;
  }
});
