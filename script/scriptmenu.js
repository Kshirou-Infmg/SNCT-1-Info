    function toggleMenu() {
      document.getElementById("sidebar").classList.toggle("active");
    }
    function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');

  document.getElementById(tabId).style.display = 'block';
}
