function showSection(sectionId) {
    const sections = document.querySelectorAll(".content");
    sections.forEach((section) => {
      section.style.display = "none";
      section.classList.remove("active");
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
    setTimeout(() => {
      activeSection.classList.add("active");
    }, 10);
  }

  function closeSection() {
    const sections = document.querySelectorAll(".content");
    sections.forEach((section) => {
      section.classList.remove("active");
      setTimeout(() => {
        section.style.display = "none";
      }, 500);
    });
  }

  function toggleMenu() {
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