L.mapbox.accessToken = "pk.eyJ1IjoiY2FudWVsIiwiYSI6ImNsNXc1cWV0aDA4MTkza3BpOXBrZTB1bnEifQ.xVXOiIFqSZOy0tvJG7fd7w";

var sg = [49.24364394977767, 0.5848411810456078];

// création de la map
var map = L.map('map').setView(sg, 6);

// création du calque image
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' 
+ L.mapbox.accessToken, {
    maxZoom : 20,
    attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//ajout d'un marqueur
var marker = L.marker(sg).addTo(map);



