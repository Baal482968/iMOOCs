<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vue-header></vue-header>
    <router-view></router-view>
    <vue-footer></vue-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: { // set components tags
    'vue-header': Header,
    'vue-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
