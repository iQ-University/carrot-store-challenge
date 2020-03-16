// no button id recognition yet
// let clickedId = 0;
// localStorage.removeItem("clickedId", JSON.stringify(clickedId));

getButtonId = idVal => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

fetch("http://localhost:3000/products")
  .then(response => {
    return response.json();
  })
  .then(data => (myData = data))
  .then(() => console.log(myData, "aici"))
  .then(() => {
    for (let i = 0; i <= myData.length; i++) {
      if (myData[i].id == clickedId) {
        //product data
        document.getElementById("prod-title").innerHTML = myData[i].name;
        document.getElementById("prod-description").innerHTML =
          myData[i].description;
        document.getElementById("prod-image").src = myData[i].imgUrl;
        //comments data
        for (let j = 0; j <= myData[i].comments.length; j++) {
          document.getElementById("comm-user").innerHTML =
            myData[i].comments[j].user;
          document.getElementById("comm-text").innerHTML =
            myData[i].comments[j].comment;
          document.getElementById("comm-image").innerHTML =
            myData[i].comments[j].userImgUrl;
        }
      }
    }
  });
