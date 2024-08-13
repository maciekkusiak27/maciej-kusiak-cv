export function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  
  export function showSection(sectionId) {
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
  
  export function closeSection() {
    const sections = document.querySelectorAll(".content");
    sections.forEach((section) => {
      section.classList.remove("active");
      setTimeout(() => {
        section.style.display = "none";
      }, 500);
    });
  }
  