document.addEventListener('DOMContentLoaded', function () {

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const header = document.querySelector('header');

  // --- Hamburger toggle ---
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // --- Mbyll menune kur klikohet link ---
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  // --- Header scroll effect ---
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // --- Active nav link (funksionon edhe me file://) ---
  const fullPath = window.location.href;
  const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1).split('?')[0].split('#')[0] || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop().split('?')[0].split('#')[0] || 'index.html';
    if (linkFile === filename) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
