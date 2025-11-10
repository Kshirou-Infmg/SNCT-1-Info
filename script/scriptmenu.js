function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const isActive = sidebar.classList.toggle("active");

  // adiciona overlay no mobile
  if (isActive) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
}

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  if (!window._myMap || !window._mapaClaro || !window._mapaEscuro) return;

  if (isDark) {
    if (window._myMap.hasLayer(window._mapaClaro)) window._myMap.removeLayer(window._mapaClaro);
    if (!window._myMap.hasLayer(window._mapaEscuro)) window._mapaEscuro.addTo(window._myMap);
  } else {
    if (window._myMap.hasLayer(window._mapaEscuro)) window._myMap.removeLayer(window._mapaEscuro);
    if (!window._myMap.hasLayer(window._mapaClaro)) window._mapaClaro.addTo(window._myMap);
  }
  setTimeout(function () { window._myMap.invalidateSize(); }, 150);
}
