AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out"
});
function toggleInfo(id) {
  const element = document.getElementById(id);
  element.classList.toggle("open");
}
