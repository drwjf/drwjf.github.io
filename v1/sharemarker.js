window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get("name");
  if (!name) {
    name = urlParams.get("nickname");
  }
  const lat = Number.parseFloat(urlParams.get("lat"));
  const lon = Number.parseFloat(urlParams.get("lon"));
  document.getElementById("name").innerText = name;
  document.getElementById("lat").innerText = lat.toFixed(6);
  document.getElementById("lon").innerText = lon.toFixed(6);
  document.getElementById('map_iframe').src = "https://www.google.com/maps?z=15&output=embed&q=" + lat + "," + lon;
});