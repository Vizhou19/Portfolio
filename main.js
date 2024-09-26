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

//** Switcher
let switcher = document.getElementById("switcher");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

//*** DropDown (For Mobile)
const dropdownButton = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (
    !dropdownButton.contains(e.target) &&
    !dropdownContent.contains(e.target)
  ) {
    dropdownContent.classList.remove("show");
  }
});
