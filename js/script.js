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


  document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/projects.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('projects-container');
        data.forEach(project => {
          const projectElement = document.createElement('div');
          projectElement.className = 'project-item';
          projectElement.innerHTML = `
            <div>
              <strong>${project.title}:</strong> ${project.description}
              <div class="icons-flex">
                ${project.links.map(link => `
                  <a
                    href="${link.url}"
                    target="_blank"
                    title="${link.title}"
                  ><i class="${link.icon}"></i></a>
                `).join('')}
              </div>
            </div>
          `;
          container.appendChild(projectElement);
        });
      })
      .catch(error => console.error('Error loading projects:', error));
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const hobbies = [
      { title: "FL Studio", image: "https://ih1.redbubble.net/image.3793467867.7589/st,small,507x507-pad,600x600,f8f8f8.jpg" },
      { title: "Sony ZV-E10", image: "https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image?$categorypdpnav$&fmt=png-alpha" },
      { title: "Shows", image: "https://myslenice-itv.pl/static/files/gallery/563/942139_64119.jpg" },
      { title: "Affinity Photo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Affinity_Photo_V2_icon.svg/2048px-Affinity_Photo_V2_icon.svg.png" },
      { title: "DaVinci Resolve", image: "https://m.media-amazon.com/images/I/51ay3FAqFsL.jpg" },
      { title: "The Witcher", image: "https://i.etsystatic.com/14980242/r/il/f2dd6a/3732803615/il_570xN.3732803615_2jnx.jpg" },
      { title: "Real Madrid", image: "https://i.ebayimg.com/images/g/36YAAOSwP4tlBRfq/s-l400.jpg" },
      { title: "Weezy", image: "https://i.scdn.co/image/ab6761610000e5ebc1c08e541eae3cc82c6988c4" },
      { title: "Counter-Strike", image: "https://ih1.redbubble.net/image.5273118055.5498/st,small,507x507-pad,600x600,f8f8f8.jpg" },
      { title: "GTA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHNKUDBQbQeiLQ1WUWm07evzbYS_AsRjMww&s" },
      { title: "Raf", image: "https://yt3.googleusercontent.com/N0nDzf-utCBzxXuNAqajAtEVGTllHlSiXEn5jVI6RHvPfhnZIfj3hB1vtVccO3OZ8WYG13bH=s900-c-k-c0x00ffffff-no-rj" },
      { title: "FIFA", image: "https://new.fifasite.pl/wp-content/uploads/2023/07/20230709_214954-1024x1015.jpg" },
    ];
  
    const container = document.getElementById('hobbies-collage');
  
    hobbies.forEach(hobby => {
      const imgElement = document.createElement('img');
      imgElement.src = hobby.image;
      imgElement.alt = hobby.title;
      imgElement.title = hobby.title;
      imgElement.className = 'hobby-image';
      container.appendChild(imgElement);
    });
  });
  