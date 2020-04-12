const getButtonId = (idVal) => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

let clickedId = JSON.parse(localStorage.getItem("clickedId"));
let displayData = JSON.parse(localStorage.getItem("fetchedData"));

const display = () => {
  displayData.map((el) => {
    if (el.id == clickedId) {
      const productMarkup = `
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
      for (let i = 0; i < el.comments.length; i++) {
        const commentsMarkup = `
      <div class="reviews">
        <div class="comment">
          <div class="comment-left">
            <img
              id="comm-image"
              src="${el.comments[i].userImgUrl}"
              alt=""
              class="avatar"
            />
          </div>
          <div class="comment-right">
            <h4 id="comm-user">
              ${el.comments[i].user}
            </h4>
            <p id="comm-text">
              ${el.comments[i].comment}
            </p>
          </div>
        </div>
      </div>
`;
        let commentNode = document.createElement("div");
        commentNode.innerHTML = commentsMarkup;
        document.getElementById("insert-comments").appendChild(commentNode);
      }
      document.getElementById("insert-product").innerHTML = productMarkup;
    }
  });
};

document.getElementById("details-body").onload = display();
