fetch('http://localhost:3000/products')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    
    let products = data;
    console.log(products)

    for(i=0; i < products.length; i++){
      document.getElementById("img").src = products[0].imgUrl ;
      document.getElementById("name").innerHTML = products[0].name; 
    }
  });
 


