export function toggleMenu() {
    const menu = document.querySelector(".header-container .info");
    const menuIcon = document.querySelector(".menu-icon i");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      menuIcon.classList.remove("fa-info-circle");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-info-circle");
    }
  }