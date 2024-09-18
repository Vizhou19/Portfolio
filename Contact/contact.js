let githubName = document.getElementById("name");
let githubUsername = document.getElementById("github");

githubUsername.addEventListener("mouseover", function () {
  githubName.style.display = "block";
});

githubUsername.addEventListener("mouseout", function () {
  githubName.style.display = "none";
});
