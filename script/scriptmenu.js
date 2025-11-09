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
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // se o mapa já existe, alterna a camada na hora
  if (typeof map !== "undefined") {
    if (isDark) {
      map.removeLayer(mapaClaro);
      map.addLayer(mapaEscuro);
    } else {
      map.removeLayer(mapaEscuro);
      map.addLayer(mapaClaro);
    }
  }
}
