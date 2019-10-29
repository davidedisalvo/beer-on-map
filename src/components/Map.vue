<template>
  <div class="map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="getCoords">
        <l-icon :icon-url="icon" :icon-size="iconSize"></l-icon>
        <l-popup :content="popup" :options="{ autoClose: false, closeOnClick: false }"></l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
// @ is an alias to /src
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import beer from "../assets/beer-mug-icon-png-11.jpg";
export default {
  components: { LMap, LTileLayer, LMarker, LIcon, LPopup },
  data() {
    return {
      zoom: 7,
      center: L.latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482),
      icon: beer,
      iconSize: [55, 55]
    };
  },
  computed: {
    getCoords() {
      let lat = parseInt(this.$store.state.beers.latitude);
      let long = this.$store.state.beers.longitude;
      console.log(this.$store.state.beers.latitude);
      this.center = L.latLng(lat, long);
      return L.latLng(lat, long);
    },
    popup() {
      return `<div><h2>${this.$store.state.beers.name}</h2><p>${
        this.$store.state.beers.city
      }</p></div>`;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.map {
  height: 95vh;
  width: 50vw;
}
</style>
