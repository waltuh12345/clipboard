const body = document.querySelector("body");
let string = localStorage.getItem("theme");

/*
const theme = {
  checkbox: document.querySelector(".theme input"),

  checkInput(string) {
    if (string === "light") {
      this.checkbox.checked = true;
    } else {
      this.checkbox.checked = false;
    }

    if (this.checkbox.checked) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      string = localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      string = localStorage.setItem("theme", "dark");
    }
  },
};

document.querySelector(".theme").addEventListener("click", (e) => {
  const { checkbox } = theme;

  if (checkbox.checked) {
    theme.checkInput("light");
  } else {
    theme.checkInput("dark");
  }
});

theme.checkInput(string);
*/

const theme = {
  input: document.querySelector(".theme input"),
  default() {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    this.input.checked = true;
  },
  dark() {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  },

  checkLocalStorage() {
    if (string === "dark") {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
      this.input.checked = false;
    }

    if (string === "light-mode") {
      this.input.checked = true;
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  },
};

theme.default();
theme.checkLocalStorage();
document.querySelector(".theme").addEventListener("click", (e) => {
  const { input } = theme;

  const arg = input.checked;

  if (arg) {
    theme.default();
    localStorage.setItem("theme", "light");
  } else {
    theme.dark();
    localStorage.setItem("theme", "dark");
  }
});
