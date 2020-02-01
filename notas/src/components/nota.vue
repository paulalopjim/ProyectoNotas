<template lang="html">
<div class="col-12">
  <div class="card border-dark mb-3 text-left">
    <div class="card-body d-flex justify-content-between">
     <div><input class="texto" type="checkbox" v-model="nota.acabada"><h4 class="card-title texto" v-bind:class="{completada: nota.acabada}">{{nota.text}}</h4></div><button v-on:click="eliminar(nota)" class="btn btn-outline-danger"> <img alt="Borrar" id='papelera' src="../assets/papelera.png"> </button>
    </div>
     <div class="card-footer bg-transparent border-dark">Footer</div>
  </div>

   <!-- <li><input type="checkbox" v-model="nota.acabada" >{{nota.text}}<button v-on:click="eliminar"> Eliminar tarea</button></li> -->
</div>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['nota','index'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      eliminar: function(key){
        this.$emit('eliminarNota',key)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.completada{
  color:green;
  text-decoration:line-through;
}
.texto{
   display: inline;
}
img{
  width: 20px;
  height: 20px;
}
.card{
  background-color: grey;
}
</style>
