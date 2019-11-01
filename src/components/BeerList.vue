<template>
  <div class="beerlist" :class="{bigger : openList}">
    <ul id="beerList">
      <h2 @click="openList = !openList">Select your beer</h2>
      <li v-for="(item, index) in beers" :key="index" @click="singleBeer(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      beers: [],
      openList: false
    };
  },
  mounted() {
    axios.get("https://api.openbrewerydb.org/breweries").then(r => {
      console.log(r.data);
      this.beers = r.data;
    });
  },
  methods: {
    singleBeer(item) {
      let beer = {
        name: item.name,
        city: item.city,
        country: item.country,
        state: item.state,
        type: item.brewery_type,
        website: item.website_url,
        latitude: item.latitude,
        longitude: item.longitude,
        id: item.id
      };

      this.$store.dispatch("beer_saved", beer);

      let el = document.getElementById("beerList");
      var intElemScrollTop = el.scrollTop;
      console.log(intElemScrollTop);
      el.scrollTop = 0;

      this.openList = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.beerlist {
  width: 100%;
  z-index: 99999;
  height: 20px;
  position: absolute;
  top: 0;
  left: 50px;
  display: block;
  height: 34px;
  transition: all 1s;
}

h2 {
  border: 2px solid black;
  cursor: pointer;
  background: #f7d20b;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 60px;
  overflow: hidden;
  transition: all 1s;
  width: auto;
}
li {
  display: block;
  margin: 0 10px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  background: #f7d20b;
  color: black;
  cursor: pointer;
  &:hover {
    background: gray;
    color: white;
  }
}
a {
  color: #42b983;
}

.bigger.beerlist {
  transition: all 1s;
  ul {
    height: 100vh;
    transition: all 1s;
    overflow: auto;
  }
}
</style>
