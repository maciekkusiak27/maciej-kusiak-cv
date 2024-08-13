export function changePhoto(section) {
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
  
  export function resetPhoto() {
    const photo = document.getElementById('mobile-profile-photo');
    photo.classList.remove('hover-web-pages', 'hover-experience', 'hover-projects', 'hover-education', 'hover-hobbys', 'hover-courses');
  }
  