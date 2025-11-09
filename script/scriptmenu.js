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
// Inicializa mapa
var map = L.map('map').setView([-17.857, -41.508], 13);

// Camada clara
var mapaClaro = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
});

// Camada escura
var mapaEscuro = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © Carto',
  subdomains: 'abcd',
  maxZoom: 20
});

// Verifica preferência salva
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  mapaEscuro.addTo(map);
} else {
  mapaClaro.addTo(map);
}

// Alterna modo escuro
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    map.removeLayer(mapaClaro);
    map.addLayer(mapaEscuro);
  } else {
    map.removeLayer(mapaEscuro);
    map.addLayer(mapaClaro);
  }
}

