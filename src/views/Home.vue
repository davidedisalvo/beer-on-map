<template>
  <div class="home">
    <Layer></Layer>

    <main>
      <h1>Select a beer from the list</h1>

      <BeerList></BeerList>

      <Map></Map>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import BeerList from "../components/BeerList.vue";
import Map from "../components/Map.vue";
import Layer from "../components/Layer.vue";

import "leaflet/dist/leaflet.css";

export default {
  components: { LMap, LTileLayer, LMarker, BeerList, Map, Layer },
  name: "home",
  data() {
    return {
      zoom: 10,
      center: L.latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482)
    };
  }
};
</script>
<style lang="scss" scoped>
main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>

