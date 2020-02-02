<template lang="html">
<div class="col-12">
  <div class="card border-dark mb-3 text-left">
    <div class="card-body d-flex justify-content-between">
     <div><input class="texto" type="checkbox" v-model="nota.acabada"><h4 class="card-title texto" v-bind:class="{completada: nota.acabada}">{{nota.text}}</h4></div><button v-on:click="eliminar(nota)" class="btn btn-outline-secondary rounded-circle"> <img alt="Borrar" id='papelera' src="../assets/papelera.png"> </button>
    </div>
     <div class="card-footer bg-transparent border-dark">
       <small id="info" class="form-text text-muted">Añadido:{{nota.fecha}}</small>
     </div>
  </div>
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
      },

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
h4{
  font-weight: bold;
}
img{
  width: 30px;
  height: 30px;
}
.card{
  background-color:#CAEBF2;

}
#info{
  color:white;
}
</style>
