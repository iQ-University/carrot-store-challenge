
const apiRoot = 'http://localhost:3000/products';


fetch(apiRoot)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let products = data;

    console.log(products);
    const container = document.getElementById('cardsContainer');
    let html = '';
    for(i=0; i < products.length; i++) {
        html += ('<div class="card"><img src = " ' 
        + products[i].imgUrl + ' "> </img> <p>' 
        + products[i].name + '</p> <button id="'+ products[i].id +'" onClick="goToDetails()">More</button></div>');
        container.innerHTML = html;
      }
  }); 



  const goToDetails = (id) => {
    localStorage.setItem("html", "html")
  }





