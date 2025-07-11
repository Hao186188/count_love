document.addEventListener('DOMContentLoaded', function() {
  function getUserId() {
    const url = new URL(window.location.href);
    return url.searchParams.get('id') || 'default';
  }
  function getStorageKey(key) {
    return getUserId() + '_' + key;
  }
  function resetUserData() {
    localStorage.removeItem(getStorageKey('galleryPhotos'));
  }
  resetUserData();
  const galleryContainer = document.getElementById('gallery-container') || document.querySelector('.gallery-container');
  let images = [];
  try { images = JSON.parse(localStorage.getItem(getStorageKey('galleryPhotos')) || '[]'); } catch {}
  if (images.length === 0) {
    images = [
      'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
      'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg',
      'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
      'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg',
    ];
  }
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Khoảnh khắc';
    img.className = 'gallery-img';
    galleryContainer.appendChild(img);
  });
});
