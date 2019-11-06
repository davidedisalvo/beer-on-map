<template>
  <div class="map" v-if="gettingLocation">
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
      zoom: 10,
      center: null,
      url:
        "https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=3eeffe78d4454d8ab83cbb1f08f30619",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: beer,
      iconSize: [55, 55],
      location: null,
      gettingLocation: false,
      errorStr: null
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
      return `<div><h2>${
        this.$store.state.beers.name
      }</h2><p class="popup-text">City: ${
        this.$store.state.beers.city
      }</p><p class="popup-text">State: ${
        this.$store.state.beers.state
      }</p><p class="popup-text">Country: ${
        this.$store.state.beers.country
      }</p><p class="popup-text">Type: ${
        this.$store.state.beers.type
      }</p><span class="popup-text">Website: <a class="popup-text" href="${
        this.$store.state.beers.website
      }"> ${this.$store.state.beers.website}</a></span></div>`;
    }
  },
  mounted() {
    // do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }
    // get position
    var self = this;
    navigator.geolocation.getCurrentPosition(
      pos => {
        self.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
        self.gettingLocation = true;
      },
      err => {
        self.gettingLocation = false;
        self.errorStr = err.message;
      },
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    );
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }
    // get position
    var self = this;
    navigator.geolocation.getCurrentPosition(
      pos => {
        self.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
        self.gettingLocation = true;
      },
      err => {
        self.gettingLocation = false;
        self.errorStr = err.message;
      },
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    );

    // var self = this;
    // this.$watchLocation()
    //   .then(coordinates => {
    //     var el = L.latLng(coordinates.lat, coordinates.lng);
    //     console.log(el);
    //     self.center = el;
    //   })
    //   .then(() => {
    //     self.gettingLocation = true;
    //   });
  }
  // updated() {
  //   //do we support geolocation
  //   if (!("geolocation" in navigator)) {
  //     this.errorStr = "Geolocation is not available.";
  //     return;
  //   }
  //   // get position
  //   navigator.geolocation.getCurrentPosition(
  //     pos => {
  //       this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
  //       this.gettingLocation = true;
  //     },
  //     err => {
  //       this.gettingLocation = false;
  //       this.errorStr = err.message;
  //     },
  //     { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
  //   );
  // }
};
</script>

<style lang="scss" scoped>
.map {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
