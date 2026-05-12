const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('open');
});
