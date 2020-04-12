const getButtonId = (idVal) => {
  let clickedId = idVal;
  localStorage.setItem("clickedId", JSON.stringify(clickedId));
};

console.log(JSON.parse(localStorage.getItem("clickedId")), "aici");
