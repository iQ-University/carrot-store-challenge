fetch('http://localhost:3000/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data;
    console.log(products)

    const container = document.getElementById('cardsContainer');
    let html = '';
    for(i=0; i < products.length; i++) {
        html += ('<div class="card"><p>' + products[i].name + '</p></div>');
        container.innerHTML = html;
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
    

