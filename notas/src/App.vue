<template>
  <div id="app" class="d-flex flex-column justify-content-between">
    <cabecera></cabecera>
    <router-view></router-view>
    <foter></foter>
  </div>
</template>

<script>
import cabecera from './components/cabecera.vue';
import foter from './components/footer.vue';
export default {
  name: 'app',
  components: {
    cabecera,
    foter
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
  background-color:#EFEFEF;
  height: 100vh;
}
</style>
