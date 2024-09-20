let projectName = document.getElementsByClassName("projects-desc");
let projectImg = document.getElementsByClassName("project-img");

projectImg.addEventListener("mouseover", function () {
  projectName.style.display = "block";
});

projectImg.addEventListener("mouseout", function () {
  projectName.style.display = "none";
});
