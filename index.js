
const apiRoot = 'http://localhost:3000/products';

fetch(apiRoot)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data;
    // console.log(products);
    const container = document.getElementById('cardsContainer');
    let html = '';
    for(i=0; i < products.length; i++) {
        html += ('<div class="card"><img src = " ' + products[i].imgUrl + ' "> </img> <p>' + products[i].name + '</p> <button class ="goToDetails"><a href="">More</a></button></div>');
        container.innerHTML = html;
      }
  }); 
    

