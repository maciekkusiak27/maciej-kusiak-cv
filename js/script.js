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
  
    experienceLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/gora.png";
    });
  
    experienceLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });
  
    hobbysLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/dol.png";
    });
  
    hobbysLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });

    webPagesLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/lgora.png";
    });  
    webPagesLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });

    educationLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/ldol.png";
    });  
    educationLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });

    projectsLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/rgora.png";
    });  
    projectsLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });

    coursesLink.addEventListener("mouseover", function() {
      profilePhoto.src = "/assets/images/me/rdol.png";
    });  
    coursesLink.addEventListener("mouseout", function() {
      profilePhoto.src = "/assets/images/me/front.png";
    });
  });