// let lastURL = document.URL;
// window.addEventListener('hashchange', function (event) {
//   Object.defineProperty(event, 'oldURL', {
//     enumerable: true,
//     configurable: true,
//     value: lastURL,
//   });
//   Object.defineProperty(event, 'newURL', {
//     enumerable: true,
//     configurable: true,
//     value: document.URL,
//   });
//   lastURL = document.URL;
//   let link = /.*#([a-zA-Z0-9\-\/\._]+)$/.exec(document.URL);
//   link = link && link[1];
//   const sections = document.querySelectorAll('section');
//   for (const section of sections) {
//     const id = section.getAttribute('id');
//     if (id !== link) {
//       section.classList.add('hidden-section');
//       continue;
//     }
//     section.classList.remove('hidden-section');
//   }
// });
let center = [60.075995987961484, 30.339222559444504];

function init() {
  let map = new ymaps.Map('map-test', {
    center: center,
    zoom: 17
  });

let placemark = new ymaps.Placemark(center, {}, {
  // iconLayout: 'default#image',
  // iconImageHref: 'img/placeholder.png',
  // iconImageSize: [30, 30],
  // iconImageOffset: [5, -40]
});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);

}
ymaps.ready(init)
