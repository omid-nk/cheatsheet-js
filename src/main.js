const homeBtn = document.querySelector(".home");
const themeBtn = document.querySelector(".theme");
const themeIcon = document.querySelector(".theme-Icon");
const htmlCheatSheet = document.querySelector(".html");
const cssCheatSheet = document.querySelector(".css");
const jsCheatSheet = document.querySelector(".js");

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

// home btn
homeBtn.addEventListener("click", () => {
  window.location.replace("");
});

// links
htmlCheatSheet.addEventListener("click", () => {
  window.location.replace("html-cheatsheet.html");
});
cssCheatSheet.addEventListener("click", () => {
  window.location.replace("css-cheatsheet.html");
});
jsCheatSheet.addEventListener("click", () => {
  window.location.replace("js-cheatsheet.html");
});
