import { fetchData } from "./utils.js";

export function loadExperience() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/experience.json"
  )
    .then((data) => {
      const experienceContainer = document.getElementById(
        "experience-container"
      );
      const lessonsContainer = document.getElementById("lessons-container");

      data.forEach((exp) => {
        const expElement = document.createElement("div");
        expElement.className = "exp-item";
        const logoHtml = exp.logo
          ? `<img src="${exp.logo}" alt="${exp.company} Logo" />`
          : "";
        expElement.innerHTML = `
          ${logoHtml}
          <div>
            <h3>${exp.company}</h3>
            <strong>${exp.position}</strong>
            <i>${exp.dates}</i>
            <p><b>Technologies:</b> ${exp.technologies}</p>
            <p><b>Responsibilities:</b> ${exp.responsibilities}</p>
            ${
              exp.responsibilitiesList
                ? `<ul>${exp.responsibilitiesList
                    .map((item) => `<li>${item}</li>`)
                    .join("")}</ul>`
                : ""
            }
            <p><b>Experience:</b> <i>${exp.experience}</i></p>
          </div>
        `;

        if (exp.positive) {
          experienceContainer.appendChild(expElement);
        } else {
          lessonsContainer.appendChild(expElement);
        }
      });
    })
    .catch((error) => console.error("Error loading experience:", error));
}

let allProjects = [];

export function loadProjects() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/projects.json"
  )
    .then((data) => {
      allProjects = data;
      displayProjects(data);
    })
    .catch((error) => console.error("Error loading projects:", error));
}

function displayProjects(projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-item";
    projectElement.innerHTML = `
      <div>
        <strong>${project.title}:</strong> ${project.description}
        <p><b>Technologies:</b> ${project.technologies.join(", ")}</p>
        <div class="icons-flex">
          ${project.links
            .map(
              (link) => `
            <a href="${link.url}" target="_blank" title="${link.title}">
              <i class="${link.icon}"></i>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    container.appendChild(projectElement);
  });
}

export function filterProjects() {
  const selectedTech = document.getElementById("tech-filter").value;
  if (selectedTech === "all") {
    displayProjects(allProjects);
  } else {
    const filteredProjects = allProjects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
    displayProjects(filteredProjects);
  }
}

export function loadCourses() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/courses.json"
  )
    .then((data) => {
      const favContainer = document.getElementById("favourites-courses");
      const otherContainer = document.getElementById("other-courses");
      const workingContainer = document.getElementById("working-courses");

      data.favourites.forEach((course) => {
        const courseElement = document.createElement("li");
        courseElement.innerHTML = `
          <a href="${course.url}" target="_blank" title="Course Link">
            <strong>${course.title}:</strong>
          </a>
          ${course.description}
        `;
        favContainer.appendChild(courseElement);
      });

      data.otherCourses.forEach((course) => {
        const courseElement = document.createElement("li");
        courseElement.innerHTML = `
          <a href="${course.url}" target="_blank" title="Course Link">
            <strong>${course.title}:</strong>
          </a>
          ${course.description}
        `;
        otherContainer.appendChild(courseElement);
      });

      data.purchased.forEach((course) => {
        const courseElement = document.createElement("li");
        courseElement.innerHTML = `
          <a href="${course.url}" target="_blank" title="Course Link">
            <strong>${course.title}:</strong>
          </a>
          ${course.description}
        `;
        workingContainer.appendChild(courseElement);
      });
    })
    .catch((error) => console.error("Error loading courses:", error));
}

export function loadEducation() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/education.json"
  )
    .then((data) => {
      const container = document.getElementById("education-container");
      data.forEach((ed) => {
        const edElement = document.createElement("div");
        edElement.className = "ed-item";
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
    .catch((error) => console.error("Error loading education:", error));
}

export function loadWebPages() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/web-pages.json"
  )
    .then((data) => {
      const container = document.getElementById("web-pages-container");
      data.forEach((page) => {
        const pageElement = document.createElement("div");
        pageElement.className = "web-page-item";
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
    .catch((error) => console.error("Error loading web pages:", error));
}

export function loadHobbies() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/hobbies.json"
  )
    .then((data) => {
      const container = document.getElementById("hobbies-collage");
      data.forEach((hobby) => {
        const imgElement = document.createElement("img");
        imgElement.src = hobby.image;
        imgElement.alt = hobby.title;
        imgElement.title = hobby.title;
        imgElement.className = "hobby-image";
        container.appendChild(imgElement);
      });
    })
    .catch((error) => console.error("Error loading hobbies:", error));
}

export function loadHeader() {
  fetchData(
    "https://raw.githubusercontent.com/maciekkusiak27/maciej-kusiak-cv/main/assets/content/header.json"
  )
    .then((data) => {
      const headerContainer = document.querySelector(".header-container .info");

      headerContainer.innerHTML = `
          <h1>${data.name}</h1>
          <h2>${data.title}</h2>
          <span><i class="fa-solid fa-birthday-cake"></i> ${data.birthday}</span>
          <span><i class="fa-solid fa-briefcase"></i> ${data.currentWork.position} <b>${data.currentWork.company}</b></span>
          <span><i class="fa-solid fa-location-dot"></i> ${data.location}</span>
          <span><a href="mailto:${data.contact.email}"><i class="fa-solid fa-envelope"></i> Email: ${data.contact.email}</a></span>
          <span><a href="${data.contact.github.url}" target="_blank"><i class="fa-brands fa-github"></i> GitHub: ${data.contact.github.username}</a></span>
          <span><a href="${data.contact.linkedin.url}" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn: ${data.contact.linkedin.username}</a></span>
          <span><a href="${data.cv.url}" download><i class="fa-solid fa-file-pdf"></i> ${data.cv.label}</a></span>
        `;
    })
    .catch((error) => console.error("Error loading header data:", error));
}
