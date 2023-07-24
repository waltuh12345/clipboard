import "../scss/main.scss";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

Promise.all([import("./helper/observer")]).then(() => AOS.init());
