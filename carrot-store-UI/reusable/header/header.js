fetch("/reusable/header/header.html")
    .then((response) => {
        return response.text();
    })
    .then(function (data) {
        document.querySelector("header").innerHTML = data;
    })