const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.menu-boton');
const closeAll = document.querySelector('.contenido');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);

  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
})

closeAll.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
})

/* Links para el menú principal */
const menuItems = [
  { href: "modulo1.html", texto: "Módulo 1"},
  { href: "modulo2.html", texto: "Módulo 2"},
  { href: "modulo3.html", texto: "Módulo 3"},
  { href: "modulo4.html", texto: "Módulo 4"}
]

document.getElementById('nav-links').innerHTML = 
  menuItems.map(
    item => `<li><a href="${item.href}">${item.texto}</a></li>`
  ).join('');


/* Tema claro/oscuro */
const btn = document.getElementById('theme-toggle');
const label = document.getElementById('mode-label');

// Clave que usamos en localStorage
const STORAGE_KEY = 'theme';

// Aplica el tema al <html> y actualiza la etiqueta
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  label.textContent = theme === 'dark' ? 'Modo oscuro' : 'Modo claro';
}

// Al cargar: leemos lo guardado, o usamos la preferencia del sistema
const saved = localStorage.getItem(STORAGE_KEY);
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

applyTheme(saved ?? preferred);

// Al hacer click: alternamos y guardamos
btn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});