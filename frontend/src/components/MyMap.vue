<template>
    <div>
        <div id="map" style="height: 500px; width: 600px;"></div>
    </div>
</template>
  
<script>
import L from 'leaflet';

export default {
    name: 'MyMap',
    mounted() {
        // Initialiser la carte dans le hook mounted()
        // Modifier la 3eme valeur pour changer le niveau de zoom
        const map = L.map('map').setView([49.49848737690784, 1.1529501423282853], 11);

        // Ajouter une couche de tuiles à la carte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Ajouter un marqueur à la carte
        L.marker([49.49848737690784, 1.1529501423282853]).addTo(map)
            .bindPopup('ML Industrie');
    },
};
</script>
  