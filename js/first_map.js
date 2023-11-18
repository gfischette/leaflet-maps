
let map = L.map('map').setView([27.759939, -82.687577], 11.50);

L.tileLayer('https://api.mapbox.com/styles/v1/gfischette03/clp00np6d00s601qog4lb18ft/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2Zpc2NoZXR0ZTAzIiwiYSI6ImNscDAwZmQ4eTAzM3Myam5yOGZpcDV0a2kifQ.x9sj6gVY2MEHJNOXx5JpdQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([27.792378011497718, -82.67354161289416]).addTo(map);
marker1.bindPopup("Mazzaro's Italian Market").openPopup();

let marker2 = L.marker([27.771200206946013, -82.66973210689967]).addTo(map);
marker2.bindPopup("Casita Taqueria");

let marker3 = L.marker([27.7713919871811, -82.64102996299407]).addTo(map);
marker3.bindPopup("Brick & Mortar");

let marker4 = L.marker([27.72597541812815, -82.74287699519846]).addTo(map);
marker4.bindPopup("Spinners Rooftop Grille");






