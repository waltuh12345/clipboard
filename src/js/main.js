import "animate.css";
import "../scss/main.scss";

const loading = document.querySelector(".loading");
const body = document.querySelector("body");
body.style.overflowY = "hidden";

Promise.all([
  import("./scroll/scroll"),
  import("./theme/theme"),
  import("./scroll/scrollbar"),
])
  .then(() => {
    loading.style.display = "none";
  })
  .then(() => {
    body.style.animation = "fadeIn 1s";
    body.style.overflow = "";
  });
