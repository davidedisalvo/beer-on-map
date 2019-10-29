<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in beers" :key="index" @click="singleBeer(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      beers: []
    };
  },
  mounted() {
    axios.get("https://api.openbrewerydb.org/breweries").then(r => {
      this.beers = r.data;
    });
  },
  methods: {
    singleBeer(item) {
      let beer = {
        name: item.name,
        city: item.city,
        latitude: item.latitude,
        longitude: item.longitude,
        id: item.id
      };

      this.$store.dispatch("beer_saved", beer);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: block;
  margin: 0 10px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: gray;
    color: white;
  }
}
a {
  color: #42b983;
}
</style>
