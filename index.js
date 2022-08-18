let lastURL = document.URL;
window.addEventListener('hashchange', function (event) {
  Object.defineProperty(event, 'oldURL', {
    enumerable: true,
    configurable: true,
    value: lastURL,
  });
  Object.defineProperty(event, 'newURL', {
    enumerable: true,
    configurable: true,
    value: document.URL,
  });
  lastURL = document.URL;
  let link = /.*#([a-zA-Z0-9\-\/\._]+)$/.exec(document.URL);
  link = link && link[1];
  const sections = document.querySelectorAll('section');
  for (const section of sections) {
    const id = section.getAttribute('id');
    if (id !== link) {
      section.classList.add('hidden-section');
      continue;
    }
    section.classList.remove('hidden-section');
  }
});
