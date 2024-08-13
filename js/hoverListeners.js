// hoverListeners.js
export function setupHoverListeners() {
    const experienceLink = document.querySelector("a[onclick=\"showSection('experience')\"]");
    const hobbysLink = document.querySelector("a[onclick=\"showSection('hobbys')\"]");
    const webPagesLink = document.querySelector("a[onclick=\"showSection('web-pages')\"]");
    const educationLink = document.querySelector("a[onclick=\"showSection('education')\"]");
    const coursesLink = document.querySelector("a[onclick=\"showSection('courses')\"]");
    const projectsLink = document.querySelector("a[onclick=\"showSection('projects')\"]");
    const profilePhoto = document.getElementById("profile-photo");
  
    function addHoverListeners(link, imgSrc) {
      link.addEventListener("mouseover", function() {
        profilePhoto.src = imgSrc;
      });
  
      link.addEventListener("mouseout", function() {
        profilePhoto.src = "/assets/images/me/front-min.png";
      });
    }
  
    addHoverListeners(experienceLink, "/assets/images/me/gora-min.png");
    addHoverListeners(hobbysLink, "/assets/images/me/dol-min.png");
    addHoverListeners(webPagesLink, "/assets/images/me/lgora-min.png");
    addHoverListeners(educationLink, "/assets/images/me/ldol-min.png");
    addHoverListeners(projectsLink, "/assets/images/me/rgora-min.png");
    addHoverListeners(coursesLink, "/assets/images/me/rdol-min.png");
  }
  