<template lang="html">   
      <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #000000;">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
          data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <router-link to="/notas">Notas</router-link>
                    <router-link to="/olimpiadas">Olimpiadas</router-link>
                    <router-link to="/noticias">Noticias</router-link>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" id="registro">Registro</button>
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" id="login">Login</button>
              </form>
          </div>
      </nav>
</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
