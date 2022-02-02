mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkZWxmYXR0YWhtb2hhbWVkIiwiYSI6ImNrejVvZ3lrODAzdDAydm11a3RsNzJqcnAifQ.VjHJXhw_PoKaUOLD61lCuQ";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 12,
  center: [30.00206, 31.25529],
});

async function getStores() {
  const res = await fetch("/api/stores/getStores");
  const storesData = await res.json();

  const stores = storesData.data.map(store => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          store.location.coordinates[0],
          store.location.coordinates[1],
        ],
      },
      properties: {
        storeId: store.storeId,
        icon: "shop",
      },
    };
  });
  loadLocation(stores);
}

function loadLocation(stores) {
  map.on("load", () => {
    map.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: stores,
      },
    });
    map.addLayer({
      id: "points",
      type: "symbol",
      source: "point",
      layout: {
        "icon-image": "{icon}-15",
        "icon-size": 1.5,
        "text-field": "{storeId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}
getStores();
