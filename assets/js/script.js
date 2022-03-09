const openModals = document.getElementsByClassName("openModal");
const modals = document.getElementsByClassName("secondNav");

for (let i = 0; i < openModals.length; i++) {
  openModals[i].addEventListener("mouseover", () => {
    modals[i].classList.remove("displayNone");
  });
  openModals[i].addEventListener("mouseout", () => {
    modals[i].classList.add("displayNone");
  });
}
