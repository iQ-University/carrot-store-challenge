fetch('http://localhost:3000/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data;
    console.log(products)


for(i=0; i < products.length; i++) {

        let cards = document.getElementsByClassName("card")[i];
        let p = document.createElement("p");
        p.innerHTML = products[i].name;
        let img = document.createElement("img");
        img.src = products[i].imgUrl;
        cards.appendChild(img);
        cards.appendChild(p);
        }



    // for(i=0; i < products.length; i++) {

    //     let cards = document.getElementsByClassName("card")[i];
    //     let p = document.createElement("p");
    //     p.innerHTML = products[i].name;
    //     let img = document.createElement("img");
    //     img.src = products[i].imgUrl;
    //     cards.appendChild(img);
    //     cards.appendChild(p);
    //     }
  }); 
    

