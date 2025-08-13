await Cesium.GeoJsonDataSource.load("Villa_Anny_II.geojson", {
  stroke: Cesium.Color.RED,
  fill: Cesium.Color.RED.withAlpha(0.5),
  clampToGround: true
});
