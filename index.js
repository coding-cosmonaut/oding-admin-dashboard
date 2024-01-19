const heartIcons = document.querySelectorAll('img[alt="heart-icon"]');

heartIcons.forEach((item) => {
  item.addEventListener("click", () => {
    toggle(item);
  });
});

function toggle(icon) {
  icon.classList.toggle("heart-fill");
}
