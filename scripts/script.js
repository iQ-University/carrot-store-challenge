// Fetch and display logic ------------------------------------>
// Fetch--------------------------->
const fetchURL = "http://localhost:3000/products";

const fetchData = () => {
  fetch(fetchURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => localStorage.setItem("fetchedData", JSON.stringify(data)));
};

const checkIfFetched = () => {
  if (localStorage.getItem("fetchedData") === null) {
    fetchData();
  }
};

document.getElementsByTagName("body").onload = checkIfFetched();

// Display-------------------------->
const getButtonId = (idVal) => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

let clickedId = JSON.parse(localStorage.getItem("clickedId"));
let displayData = JSON.parse(localStorage.getItem("fetchedData"));

const display = () => {
  displayData.forEach((el) => {
    if (el.id === clickedId) {
      const productMarkup = `
      <div class="product-details">
        <div class="product-left">
          <img alt="" src="${el.imgUrl}"/>
        </div>
        <div class="product-right">
          <div class="product-right-top">
            <h3>
              ${el.name}
            </h3>
            <p>
              ${el.description}
            </p>
          </div>
          <div class="product-right-bottom">
            <h3>Price: <span>${el.price} ${el.currency}</span></h3>
            <a href="" class="btn"
            >Add to cart<img
              src="../img/shopping-cart-solid.svg"
              style="width: 20px;"
            /></a>
          </div>
        </div>
      </div>
`;
      for (let i = 0; i < el.comments.length; i++) {
        const commentsMarkup = `
      <div class="reviews">
        <div class="comment">
          <div class="comment-left">
            <img
              src="${el.comments[i].userImgUrl}"
              alt=""
              class="avatar"
            />
          </div>
          <div class="comment-right">
            <h4>
              ${el.comments[i].user}
            </h4>
            <p>
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

// Dropdown menu ------------------------------------------->
let mobileButton = document.getElementsByClassName("hamburger");
let mobileMenu = document.getElementsByClassName("mobile-menu");
const showMenu = function () {
  if (mobileMenu[0].classList.contains("active")) {
    mobileMenu[0].classList.remove("active");
  } else {
    mobileMenu[0].classList.add("active");
  }
};

mobileButton[0].onclick = showMenu;
