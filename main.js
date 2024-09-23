// * Cozy Cafe
let cafeImg = document.getElementById("cafe-img");
let cafeName = document.getElementById("cafe-name");

cafeImg.addEventListener("mouseover", function () {
  cafeName.style.display = "block";
});

cafeImg.addEventListener("mouseout", function () {
  cafeName.style.display = "none";
});

//* Gaming Calculator
let calcImg = document.getElementById("calc-img");
let calcName = document.getElementById("calc-name");

calcImg.addEventListener("mouseover", function () {
  calcName.style.display = "block";
});

calcImg.addEventListener("mouseout", function () {
  calcName.style.display = "none";
});
