<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import {store} from "./store";
import NavBar from "./components/NavBar";

export default {
  store,
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
body {
   background-image: url("assets/SeachPageBackground.jpg");
   background-size: cover;
 }
</style>
