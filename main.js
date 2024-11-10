<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState({}, '', href);
      loadPage(href);
    });
  });

  window.addEventListener('popstate', () => {
    const currentUrl = window.location.pathname;
    loadPage(currentUrl);
  });

  const currentUrl = window.location.pathname;
  loadPage(currentUrl);
});

function loadPage(url) {
  const app = document.getElementById('app');
  app.innerHTML = '<p>Cargando...</p>';

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newContent = doc.getElementById('app').innerHTML;
      app.innerHTML = newContent;
    })
    .catch(error => {
      console.error('Error al cargar la página:', error);
      app.innerHTML = '<p>Error al cargar la página</p>';
    });
=======
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState({}, '', href);
      loadPage(href);
    });
  });

  window.addEventListener('popstate', () => {
    const currentUrl = window.location.pathname;
    loadPage(currentUrl);
  });

  const currentUrl = window.location.pathname;
  loadPage(currentUrl);
});

function loadPage(url) {
  const app = document.getElementById('app');
  app.innerHTML = '<p>Cargando...</p>';

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const newContent = doc.getElementById('app').innerHTML;
      app.innerHTML = newContent;
    })
    .catch(error => {
      console.error('Error al cargar la página:', error);
      app.innerHTML = '<p>Error al cargar la página</p>';
    });
>>>>>>> 6c1be356cd642369e218c7cdec5e2caa2827712a
}