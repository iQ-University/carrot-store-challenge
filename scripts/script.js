const getButtonId = idVal => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

const fetchData = idVal => {
  const fetchedData = fetch(`http://localhost:3000/products/${idVal}`)
    .then(result => result.json())
    .then(data => {
      return data;
    })
    .then(data => localStorage.setItem("serverData", JSON.stringify(data)));

  return fetchedData;
};

const useData = () => {
  let serverData = JSON.parse(localStorage.getItem("serverData"));
};
