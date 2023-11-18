let mapTwo = L.map('mapTwo').setView([36.861591, -119.349290], 5.03);

L.tileLayer('https://api.mapbox.com/styles/v1/gfischette03/clp00np6d00s601qog4lb18ft/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2Zpc2NoZXR0ZTAzIiwiYSI6ImNscDAwZmQ4eTAzM3Myam5yOGZpcDV0a2kifQ.x9sj6gVY2MEHJNOXx5JpdQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mapTwo);


