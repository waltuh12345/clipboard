/*
const hiddenElem = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    console.log(element);
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});

const brandIcon = document.querySelector(".brand-icon").querySelectorAll("a");
brandIcon.forEach((icon) => {
  console.log(icon);
  icon.style.opacity = "0";

  icon.addEventListener("animationstart", (e) => {
    icon.style.opacity = "";
  });
});

const sec2Col = document
  .querySelector(".sec2")
  .querySelector(".row-wrapper")
  .querySelectorAll("div");
sec2Col.forEach((elem) => {
  elem.style.opacity = "0";

  elem.addEventListener("animationstart", (e) => {
    elem.style.opacity = "";
  });
});

*/
