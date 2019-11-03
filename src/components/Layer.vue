<template>
  <div class="layer" id="box" :class="{smaller : makeSmaller}">
    <h1>WELCOME TO BEER LOCATOR</h1>
    <img src="../assets/beer-pint.svg" alt>
    <button @click="makeSmaller = true">FIND MY BEER</button>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";

export default {
  data() {
    return {
      makeSmaller: false
    };
  },
  methods: {},
  mounted() {
    var colors = ["#d8e200", "#f7d20b"];
    var rand = colors[Math.floor(Math.random() * colors.length)];
    var total = 30;
    var box = document.getElementById("box"),
      w = window.innerWidth,
      h = window.innerHeight;
    console.log(w);
    for (var i = 0; i < total; i++) {
      var Div = document.createElement("div");
      TweenLite.set(Div, {
        attr: { class: "dot" },
        x: R(0, w - 100),
        y: R(-200, -150),
        z: R(-200, 200),
        scale: R(0.3, 2),
        transformOrigin: "center",
        border: "1px solid " + rand
      });
      box.appendChild(Div);
      animm(Div);
    }
    function animm(elm) {
      TweenMax.to(elm, R(2, 5), {
        y: "-=500",
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
      });
      TweenMax.fromTo(
        elm,
        R(0.02, 2),
        {
          left: R(2, 5)
        },
        {
          left: R(-2, -5),
          repeat: -1 /* Aka infinite amount of repeats */,
          yoyo: true /* Make it go back and forth */
        }
      );
      TweenMax.to(elm, R(2, 8), {
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
      });
    }

    //random number
    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.layer {
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
}

img {
  position: relative;
  z-index: 9999;
  max-width: 100%;
  @media only screen and (max-width: 420px) {
    max-width: 50%;
    max-height: 50%;
  }
}
h1 {
  color: #f7d20b;
  font-family: "Staatliches", cursive;
  font-size: 65px;
  letter-spacing: 10px;
  @media only screen and (max-width: 420px) {
    font-size: 35px;
  }
}
button {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background: #f7d20b;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}
.smaller {
  transform: translateY(-100vh);
  visibility: hidden;
  transition: all 1s;
  transition-delay: 0.2s;

  img {
    opacity: 0;
    transition: all 0.3s;
  }
  h1 {
    opacity: 0;
    transition: all 0.7s;
  }
  button {
    opacity: 0;
    transition: all 0.7s;
  }
}
</style>
