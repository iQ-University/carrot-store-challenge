fetch("http://localhost:3000/products")
  .then(response => {
    return response.json();
  })
  .then(data => (myData = data))
  .then(() => console.log(myData, "aici"))
  .then(() => {
    //product data
    document.getElementById("prod-description").innerHTML =
      myData[0].description;
    document.getElementById("prod-title").innerHTML = myData[0].name;
    document.getElementById("prod-image").src = myData[0].imgUrl;
    //comments data
    document.getElementById("comm-text").innerHTML =
      myData[0].comments[0].comment;
    document.getElementById("comm-name").innerHTML = myData[0].comments[0].user;
    document.getElementById("comm-image").src =
      myData[0].comments[0].userImgUrl;
  });
