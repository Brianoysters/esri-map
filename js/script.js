window.onload = function() {
    // 1. Esri JavaScript API Map
    require([
      "esri/Map",
      "esri/views/MapView"
    ], function(Map, MapView) {
      const esriMap = new Map({
        basemap: "streets"  // Ensure the basemap is working
      });
  
      const esriView = new MapView({
        container: "esriMap",
        map: esriMap,
        zoom: 4,
        center: [0, 0] // Longitude, latitude
      });
    });
  
    // 2. OpenLayers Map
    const openlayersMap = new ol.Map({
      target: 'openlayersMap',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()  // OpenStreetMap tiles
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 4
      })
    });
  
    // 3. Leaflet.js Map
    const leafletMap = L.map('leafletMap').setView([0, 0], 4);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(leafletMap);
  };
  
