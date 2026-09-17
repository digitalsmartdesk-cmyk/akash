(function () {
  var paintings = [
    { src: 'images/paintings/painting-01.jpg', title: 'Untitled I', medium: 'Mix media on canvas', year: 2011 },
    { src: 'images/paintings/painting-02.jpg', title: 'A Foolish Man', medium: 'Acrylic on canvas', year: 2011 },
    { src: 'images/paintings/painting-03.jpg', title: 'An Alone Bird', medium: 'Acrylic on canvas', year: 2012 },
    { src: 'images/paintings/painting-04.jpg', title: 'Untitled', medium: 'Acrylic on canvas', year: 2012 },
    { src: 'images/paintings/painting-05.jpg', title: 'Untitled', medium: 'Oil on canvas', year: 2012 },
    { src: 'images/paintings/painting-06.jpg', title: 'Sun Set', medium: 'Acrylic on canvas', year: 2012 },
    { src: 'images/paintings/painting-07.jpg', title: 'Untitled', medium: 'Acrylic on paper', year: 2013 },
    { src: 'images/paintings/painting-08.jpg', title: 'Untitled', medium: 'Acrylic on paper', year: 2013 },
    { src: 'images/paintings/painting-09.jpg', title: 'Untitled', medium: 'Acrylic on canvas', year: 2014 },
    { src: 'images/paintings/painting-10.jpg', title: 'Untitled', medium: 'Mix media on paper', year: 2014 },
    { src: 'images/paintings/painting-11.jpg', title: 'Untitled', medium: 'Acrylic on canvas', year: 2014 },
    { src: 'images/paintings/painting-12.jpg', title: 'An Umbrella', medium: 'Acrylic on canvas', year: 2014 },
    { src: 'images/paintings/painting-13.jpg', title: 'Untitled', medium: 'Acrylic on canvas', year: 2014 },
    { src: 'images/paintings/painting-14.jpg', title: 'Untitled', medium: 'Mix media on canvas', year: 2014 },
    { src: 'images/paintings/painting-15.jpg', title: 'Night Scene of Nakki Lake', medium: 'Oil on canvas', year: 2015 },
    { src: 'images/paintings/painting-16.jpg', title: 'Untitled', medium: 'Oil on canvas', year: 2015 },
    { src: 'images/paintings/painting-17.jpg', title: 'Untitled', medium: 'Oil on canvas', year: 2015 },
    { src: 'images/paintings/painting-18.jpg', title: 'Untitled', medium: 'Oil on canvas', year: 2015 }
  ];

  var murals = [
    { src: 'images/murals/mural-01.jpg', title: 'Children Cycling', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-02.jpg', title: 'Nature Alphabet Classroom', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-03.jpg', title: 'Jungle Friends', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-04.jpg', title: 'Wildlife Classroom', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-05.jpg', title: 'Classroom Overview', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-06.jpg', title: 'Jungle Panorama', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-07.jpg', title: 'Children at Play', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-08.jpg', title: 'Alphabet Tree Mural', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-09.jpg', title: 'Animal Kingdom', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-10.jpg', title: 'Lion Family', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-11.jpg', title: 'Tiger Mural', meta: 'Wall mural · School, Jaipur' },
    { src: 'images/murals/mural-12.jpg', title: 'Alphabet Splash Tree', meta: 'Wall mural · School, Jaipur' }
  ];

  var stripSrcs = [
    'images/paintings/painting-15.jpg',
    'images/paintings/painting-02.jpg',
    'images/paintings/painting-03.jpg',
    'images/paintings/painting-04.jpg',
    'images/paintings/painting-13.jpg',
    'images/paintings/painting-12.jpg',
    'images/paintings/painting-18.jpg',
    'images/paintings/painting-01.jpg'
  ];

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderStrip() {
    var track = document.getElementById('strip-track');
    var loop = stripSrcs.concat(stripSrcs);
    loop.forEach(function (src) {
      var item = el('div', 'strip__item');
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      item.appendChild(img);
      track.appendChild(item);
    });
  }

  function renderPaintings() {
    var grid = document.getElementById('paintings-grid');
    paintings.forEach(function (painting) {
      var meta = painting.medium + ' · ' + painting.year;
      var card = el('div', 'painting-card');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'View ' + painting.title);

      var img = document.createElement('img');
      img.src = painting.src;
      img.alt = painting.title + ', ' + meta;
      card.appendChild(img);

      card.appendChild(el('div', 'painting-card__overlay'));

      var caption = el('div', 'painting-card__caption');
      caption.appendChild(el('div', 'painting-card__title', painting.title));
      caption.appendChild(el('div', 'painting-card__meta', meta));
      card.appendChild(caption);

      card.addEventListener('click', function () {
        openLightbox(painting.src, painting.title, meta);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(painting.src, painting.title, meta);
        }
      });

      grid.appendChild(card);
    });
  }

  function renderMurals() {
    var grid = document.getElementById('murals-grid');
    murals.forEach(function (mural) {
      var card = el('div', 'mural-card');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'View ' + mural.title);

      var img = document.createElement('img');
      img.src = mural.src;
      img.alt = mural.title + ', ' + mural.meta;
      card.appendChild(img);

      card.appendChild(el('div', 'mural-card__overlay'));

      var caption = el('div', 'mural-card__caption');
      caption.appendChild(el('div', 'mural-card__title', mural.title));
      caption.appendChild(el('div', 'mural-card__meta', mural.meta));
      card.appendChild(caption);

      card.addEventListener('click', function () {
        openLightbox(mural.src, mural.title, mural.meta);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(mural.src, mural.title, mural.meta);
        }
      });

      grid.appendChild(card);
    });
  }

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxMeta = document.getElementById('lightbox-meta');
  var lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, title, meta) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxMeta.textContent = meta;
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightboxClose) return;
    closeLightbox();
  });
  lightboxClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  renderStrip();
  renderPaintings();
  renderMurals();
})();
