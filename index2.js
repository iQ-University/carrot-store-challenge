

// let cards = document.getElementsByClassName("card")[0];
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
        cards.appendChild(p);
        let img = document.createElement("img");
        img src = products[i].imgUrl;
        cards.appendChild(img);
        }
  }); 
    
    
//     


// } )





 


// let cards = document.getElementsByClassName("card")[0];

// $.get("http://localhost:3000/products", function(data, status){
//   let products = data;
//   console.log(products)
 
//   for(i=0; i < products.length; i++){
//     let p = document.createElement("p");
//     p.innerHTML = products.name;
//     cards.appendChild(p);
   
//     // let card = $(".card");
//     // card.append("<img src ="+ products[i].imgUrl +">"  + "</img>" +"<p>" + products[i].name + "<p>")
//   };
// });




// for(var i = 0; i < items.length; i++) {
//     var h5 = document.createElement("h5");
//     h5.innerHTML = items[i].title;
//     news.appendChild(h5);
//     var p = document.createElement("p");
//     p.innerHTML = items[i].author;
//     news.appendChild(p);

// }