const homeLink = document.getElementById('home-link');
const bagLink = document.getElementById('bag-link');
const storageLink = document.getElementById('storage-link');
const menu = document.getElementById('menu');

homeLink.addEventListener('click', () => {
  menu.style.display = 'none';
});

bagLink.addEventListener('click', () => {
  menu.style.display = 'none';
});

storageLink.addEventListener('click', () => {
  menu.style.display = 'none';
});
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});