const heartIcons = document.querySelectorAll('img[alt="heart-icon"]');
const hamburgerCont = document.querySelector(".container-hamburger");
const dashboard = document.querySelector(".dashboard");

heartIcons.forEach((item) => {
  item.addEventListener("click", () => {
    toggle(item);
  });
});

hamburgerCont.addEventListener("click", () => {
  toggle(hamburgerCont);
});

function toggle(icon) {
  if (icon.classList.contains("container-hamburger")) {
    icon.classList.toggle("change");
    dashboard.classList.toggle("dashboard-appear");
  } else {
    icon.classList.toggle("heart-fill");
  }
}
