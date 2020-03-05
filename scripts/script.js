fetch("http://localhost:3000/products")
  .then(response => {
    return response.json();
  })
  .then(data => (myData = data))
  .then(() => console.log(myData, "aici"));
