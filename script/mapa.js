//Inicialização do mapa
var map = L.map('map').setView([-17.857, -41.508], 14);

//Camada clara
var mapaClaro = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
});

//Camada escura
var mapaEscuro = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © Carto',
  subdomains: 'abcd',
  maxZoom: 20
});

//Aplica tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  mapaEscuro.addTo(map);
} else {
  mapaClaro.addTo(map);
}

//Marcadores dos pontos de coleta
L.marker([-17.892662984832256, -41.523976461703825]).addTo(map)
  .bindPopup('<b>Reciclagem Campos</b><br>Av. Alfredo Sá, 2597, Jardim das Acácias. Centro de reciclagem. Abre segunda às 07:30.');

L.marker([-17.842944810562578, -41.5225665153426]).addTo(map)
  .bindPopup('<b>Tele Entulho Teófilo</b><br>Rua da Celebração, 170, Viriato. Empresa especializada em coleta de entulho.');

L.marker([-17.85371838710356, -41.50638587781103]).addTo(map)
  .bindPopup('<b>Tele Entulho Marajoara</b><br>R. Francisco Soares de Sá, 196, bairro Grão Pará. Atua na coleta de entulho. Aberto agora, fecha às 20:00.');

L.marker([-17.837978069391667, -41.509363128918984]).addTo(map)
  .bindPopup('<b>Associação dos Catadores de Materiais Recicláveis Nova</b><br>R. Rachid Handere, 1919, Felicidade. Centro de reciclagem comunitário. Abre segunda às 07:00.');

L.marker([-17.8434201, -41.5124245]).addTo(map)
  .bindPopup('<b>SBA Sucatas Bahia</b><br>Rua João XXIII, Viriato. Comércio de sucatas e resíduos metálicos. Aberto segunda às 08:00.');

L.marker([-17.857777, -41.503000]).addTo(map)
  .bindPopup('<b>Tele Entulho Expresso 2500</b><br>Rua Manoel Pimenta, bairro Manoel Pimenta. Coleta de entulho e aluguel de caçambas.');

L.marker([-17.859000, -41.503000]).addTo(map)
  .bindPopup('<b>Papa Tudo Tele Entulho Ltda</b><br>Avenida Getúlio Vargas, Centro. Coleta de entulho e locação de caçambas.');

L.marker([-17.860500, -41.501700]).addTo(map)
  .bindPopup('<b>Caçambas Compartilhar</b><br>Rua das Acácias, bairro Jardim das Acácias. Aluguel de caçambas e coleta de resíduos.');

L.marker([-17.850000, -41.510000]).addTo(map)
  .bindPopup('<b>TERRA & ENTULHO LTDA</b><br>Rua Projetada, bairro São Cristóvão. Coleta de resíduos não perigosos e locação de equipamentos.');
