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

  document.addEventListener("DOMContentLoaded", function() {
    const experienceLink = document.querySelector("a[onclick=\"showSection('experience')\"]");
    const hobbysLink = document.querySelector("a[onclick=\"showSection('hobbys')\"]");
    const webPagesLink = document.querySelector("a[onclick=\"showSection('web-pages')\"]");
    const educationLink = document.querySelector("a[onclick=\"showSection('education')\"]");
    const coursesLink = document.querySelector("a[onclick=\"showSection('courses')\"]");
    const projectsLink = document.querySelector("a[onclick=\"showSection('projects')\"]");
    const profilePhoto = document.getElementById("profile-photo");
    const mobileProfilePhoto = document.getElementById("mobile-profile-photo");

    function addHoverListeners(link, imgSrc) {
      link.addEventListener("mouseover", function() {
        profilePhoto.src = imgSrc;
        mobileProfilePhoto.src = imgSrc;
      });

      link.addEventListener("mouseout", function() {
        profilePhoto.src = "/assets/images/me/front.png";
        mobileProfilePhoto.src = "/assets/images/me/front.png";
      });
    }

    addHoverListeners(experienceLink, "/assets/images/me/gora.png");
    addHoverListeners(hobbysLink, "/assets/images/me/dol.png");
    addHoverListeners(webPagesLink, "/assets/images/me/lgora.png");
    addHoverListeners(educationLink, "/assets/images/me/ldol.png");
    addHoverListeners(projectsLink, "/assets/images/me/rgora.png");
    addHoverListeners(coursesLink, "/assets/images/me/rdol.png");
  });