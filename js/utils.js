export function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  
  export function fetchData(url) {
    return fetch(url).then(response => response.json());
  }
  