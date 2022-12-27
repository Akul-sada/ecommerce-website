
const menu = document.getElementById('menu');

const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

const menuList = document.querySelectorAll("#menu ul li a");

menuList.forEach(a => {
  a.addEventListener("click", () => {
    menu.style.display = "none";
  });
});