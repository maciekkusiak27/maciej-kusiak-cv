function isMobileDevice() {
  return window.innerWidth <= 768;
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".content");
  sections.forEach((section) => {
    section.style.display = "none";
    section.classList.remove("active");
  });
  const activeSection = document.getElementById(sectionId);
  
  const delay = isMobileDevice() ? 500 : 10;

  activeSection.style.display = "block";
  setTimeout(() => {
    activeSection.classList.add("active");
  }, delay);
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
        profilePhoto.src = "/assets/images/me/front-min.png";
        mobileProfilePhoto.src = "/assets/images/me/front-min.png";
      });
    }

    addHoverListeners(experienceLink, "/assets/images/me/gora-min.png");
    addHoverListeners(hobbysLink, "/assets/images/me/dol-min.png");
    addHoverListeners(webPagesLink, "/assets/images/me/lgora-min.png");
    addHoverListeners(educationLink, "/assets/images/me/ldol-min.png");
    addHoverListeners(projectsLink, "/assets/images/me/rgora-min.png");
    addHoverListeners(coursesLink, "/assets/images/me/rdol-min.png");
  });


  document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/experience.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('experience-container');
        data.forEach(exp => {
          const expElement = document.createElement('div');
          expElement.className = 'exp-item';
          expElement.innerHTML = `
            <img src="${exp.logo}" alt="${exp.company} Logo" />
            <div>
              <h3>${exp.company}</h3>
              <strong>${exp.position}</strong>
              <span>${exp.dates}</span>
              <p>Technologies: ${exp.technologies}</p>
              <p>${exp.responsibilities}</p>
              ${exp.responsibilitiesList ? `<ul>${exp.responsibilitiesList.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            </div>
          `;
          container.appendChild(expElement);
        });
      })
      .catch(error => console.error('Error loading experience:', error));
  
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
                  <a href="${link.url}" target="_blank" title="${link.title}">
                    <i class="${link.icon}"></i>
                  </a>
                `).join('')}
              </div>
            </div>
          `;
          container.appendChild(projectElement);
        });
      })
      .catch(error => console.error('Error loading projects:', error));
  
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/courses.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const favContainer = document.getElementById('favourites-courses');
        const otherContainer = document.getElementById('other-courses');
        const workingContainer = document.getElementById('working-courses');
  
        data.favourites.forEach(course => {
          const courseElement = document.createElement('li');
          courseElement.innerHTML = `
            <a href="${course.url}" target="_blank" title="Course Link">
              <strong>${course.title}:</strong>
            </a>
            ${course.description}
          `;
          favContainer.appendChild(courseElement);
        });
  
        data.otherCourses.forEach(course => {
          const courseElement = document.createElement('li');
          courseElement.innerHTML = `
            <a href="${course.url}" target="_blank" title="Course Link">
              <strong>${course.title}:</strong>
            </a>
            ${course.description}
          `;
          otherContainer.appendChild(courseElement);
        });
  
        data.purchased.forEach(course => {
          const courseElement = document.createElement('li');
          courseElement.innerHTML = `
          <a href="${course.url}" target="_blank" title="Course Link">
            <strong>${course.title}:</strong>
          </a>
          ${course.description}
        `;
          workingContainer.appendChild(courseElement);
        });
      })
      .catch(error => console.error('Error loading courses:', error));
  
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/education.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('education-container');
        data.forEach(ed => {
          const edElement = document.createElement('div');
          edElement.className = 'ed-item';
          edElement.innerHTML = `
            <img src="${ed.logo}" alt="${ed.institution} Logo" />
            <div>
              <h3>${ed.title}</h3>
              <strong>${ed.field}</strong>
              <span>${ed.degree}</span>
              <span>${ed.dates}</span>
              <span><i>${ed.thesis}</i></span>
            </div>
          `;
          container.appendChild(edElement);
        });
      })
      .catch(error => console.error('Error loading education:', error));
  
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/web-pages.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('web-pages-container');
        data.forEach(page => {
          const pageElement = document.createElement('div');
          pageElement.className = 'web-page-item';
          pageElement.innerHTML = `
            <iframe src="${page.url}" title="${page.title}"></iframe>
            <div>
              <strong>${page.title}:</strong> ${page.description}
              <a href="${page.url}" target="_blank" title="Visit ${page.title}">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          `;
          container.appendChild(pageElement);
        });
      })
      .catch(error => console.error('Error loading web pages:', error));
  
    fetch('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/hobbies.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('hobbies-collage');
        data.forEach(hobby => {
          const imgElement = document.createElement('img');
          imgElement.src = hobby.image;
          imgElement.alt = hobby.title;
          imgElement.title = hobby.title;
          imgElement.className = 'hobby-image';
          container.appendChild(imgElement);
        });
      })
      .catch(error => console.error('Error loading hobbies:', error));
  });
  

  function changePhoto(section) {
    const photo = document.getElementById('mobile-profile-photo');
    photo.classList.remove('hover-web-pages', 'hover-experience', 'hover-projects', 'hover-education', 'hover-hobbys', 'hover-courses');
    
    switch (section) {
      case 'web-pages':
        photo.classList.add('hover-web-pages');
        break;
      case 'experience':
        photo.classList.add('hover-experience');
        break;
      case 'projects':
        photo.classList.add('hover-projects');
        break;
      case 'education':
        photo.classList.add('hover-education');
        break;
      case 'hobbys':
        photo.classList.add('hover-hobbys');
        break;
      case 'courses':
        photo.classList.add('hover-courses');
        break;
      default:
        break;
    }
  }
  
  function resetPhoto() {
    const photo = document.getElementById('mobile-profile-photo');
    photo.classList.remove('hover-web-pages', 'hover-experience', 'hover-projects', 'hover-education', 'hover-hobbys', 'hover-courses');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.getElementById('mobile-profile-photo');
    
    const webPagesLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'web-pages\')"]');
    const experienceLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'experience\')"]');
    const projectsLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'projects\')"]');
    const educationLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'education\')"]');
    const hobbysLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'hobbys\')"]');
    const coursesLink = document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'courses\')"]');
    
    webPagesLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-web-pages');
    });
    webPagesLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-web-pages');
    });
  
    experienceLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-experience');
    });
    experienceLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-experience');
    });
  
    projectsLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-projects');
    });
    projectsLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-projects');
    });
  
    educationLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-education');
    });
    educationLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-education');
    });
  
    hobbysLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-hobbys');
    });
    hobbysLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-hobbys');
    });
  
    coursesLink.addEventListener('mouseover', function() {
      profilePhoto.classList.add('hover-courses');
    });
    coursesLink.addEventListener('mouseout', function() {
      profilePhoto.classList.remove('hover-courses');
    });
  });
  