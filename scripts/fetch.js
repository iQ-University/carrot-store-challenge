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
