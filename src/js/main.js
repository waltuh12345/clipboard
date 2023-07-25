import "../scss/main.scss";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const body = document.querySelector("body");
body.style.overflowY = "hidden";
const loading = document.querySelector(".loading-wrapper");

Promise.all([import("./helper/observer")]).then(() => {
  AOS.init();
  body.style.overflowY = "";
  loading.style.display = "none";
});
