const homeBtn = document.querySelector(".home");
const themeBtn = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-Icon");
const htmlCheatSheet = document.querySelector(".html");
const cssCheatSheet = document.querySelector(".css");
const jsCheatSheet = document.querySelector(".js");

// load header
const headerContainer = document.getElementById("header");

fetch("/components/header.html")
  .then((response) => response.text())
  .then((html) => {
    headerContainer.innerHTML = html;
    const themeBtn = headerContainer.querySelector(".theme");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const icon = themeBtn.querySelector("use");
      icon.setAttribute(
        "href",
        document.body.classList.contains("dark") ? "#sun" : "#moon"
      );
    });
  })
  .catch((err) => console.log("Failed to load header:", err));

// check if user first time login set default theme in localStorage
(function checkTheme() {
  if (localStorage.getItem("themeIsDark") === null) {
    localStorage.setItem("themeIsDark", "dark");
  } else {
    syncTheme();
  }
})();

// change thme with themeBtn
themeBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("themeIsDark");
  if (theme === "dark") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    themeIcon.setAttribute("href", "#moon");
    localStorage.setItem("themeIsDark", "light");
  } else {
    themeIcon.setAttribute("href", "#sun");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("themeIsDark", "dark");
  }
});

// sync theme with localStorage
function syncTheme() {
  const theme = localStorage.getItem("themeIsDark");
  if (theme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    themeIcon.setAttribute("href", "#moon");
  } else {
    themeIcon.setAttribute("href", "#sun");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
}
