<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {}
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  overflow: hidden;
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  width: 400px !important;
  height: 305px !important;
  @media only screen and (max-width: 420px) {
    width: 80vw !important;
  }
}

.leaflet-popup-content {
  width: 100% !important;
  div:first-child {
    width: 100%;
  }
}
.dot {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  bottom: 0;
}

.popup-text {
  font-size: 18px;
  word-break: break-all;
}
</style>


