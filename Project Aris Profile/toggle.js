const myToggle = document.querySelector(".toggle");
const title = document.querySelector("#title");
const hero = document.querySelector("#hero");
const pic = document.querySelector("#profile-pic");
const features = document.querySelector("#features");
const contactMe = document.querySelector("#contact");
const footer = document.querySelector("#footer");
const icons = document.querySelectorAll(".icon");

function toggleColor() {
  pic.classList.toggle("inverse");
  title.classList.toggle("inverse");
  hero.classList.toggle("inverse");
  features.classList.toggle("inverse");
  contactMe.classList.toggle("reverse-color");
  footer.classList.toggle("reverse-color");
  icons.forEach((icon) => {
    icon.classList.toggle("inverse");
  });
}

myToggle.addEventListener("click", toggleColor);
