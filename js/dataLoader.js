import { fetchData } from './utils.js';

export function loadExperience() {
  fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/experience.json')
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
}

export function loadProjects() {
  fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/projects.json')
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
}

export function loadCourses() {
  fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/courses.json')
    .then(data => {
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
}

export function loadEducation() {
  fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/education.json')
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
}

export function loadWebPages() {
  fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/web-pages.json')
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
}

export function loadHobbies() {
    fetchData('https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/hobbies.json')
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
  }