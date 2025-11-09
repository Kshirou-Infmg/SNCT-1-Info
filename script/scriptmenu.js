function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
  //codiguin para que se o mapa já existe, alterna a camada
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
