import { showSection, closeSection } from './sections.js';
import { toggleMenu } from './menu.js';
import { setupHoverListeners } from './hoverListeners.js';
import { loadExperience, loadProjects, loadCourses, loadEducation, loadWebPages, loadHobbies } from './dataLoader.js';
import { changePhoto, resetPhoto } from './photo.js';

window.showSection = showSection;
window.closeSection = closeSection;
window.toggleMenu = toggleMenu;

document.addEventListener("DOMContentLoaded", function() {
  setupHoverListeners();

  loadExperience();
  loadProjects();
  loadCourses();
  loadEducation();
  loadWebPages();
  loadHobbies();

  document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

  const sectionLinks = {
    'web-pages': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'web-pages\')"]'),
    'experience': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'experience\')"]'),
    'projects': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'projects\')"]'),
    'education': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'education\')"]'),
    'hobbys': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'hobbys\')"]'),
    'courses': document.querySelector('.mobile-row a[href="#"][onclick*="showSection(\'courses\')"]')
  };

  Object.keys(sectionLinks).forEach(section => {
    sectionLinks[section].addEventListener('mouseover', function() {
      changePhoto(section);
    });
    sectionLinks[section].addEventListener('mouseout', function() {
      resetPhoto();
    });
  });
});
