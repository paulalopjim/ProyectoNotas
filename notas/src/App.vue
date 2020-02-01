<template>
  <div id="app" class="mx-0">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cabecera></cabecera>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import cabecera from './components/cabecera.vue';
// import contenido from './components/contenido.vue';
// import foter from './components/footer.vue';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    cabecera
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

}
</style>
