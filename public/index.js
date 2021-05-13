const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navbar ul");
const closebtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  console.log("clicked");
  navmenu.classList.toggle("nav-active");
  hamburger.style.display = "none";
  closebtn.style.visibility = "visible";
});

closebtn.addEventListener("click", () => {
  navmenu.classList.toggle("nav-active");
  closebtn.style.visibility = "hidden";
  hamburger.style.display = "block";
});
