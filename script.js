const btn = document.getElementById('toggle-dark');
const body = document.body;

btn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Cambia el texto del botón
  if (body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Modo claro';
  } else {
    btn.textContent = '🌓 Modo oscuro';
  }
});
