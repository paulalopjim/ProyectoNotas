<template lang="html">

<div class="mx-0">
  <div id="notas" class="row mt-4 d-flex justify-content-center mx-0">
  <input type="text" v-model="nuevaNota" v-on:keyup.enter="add">
       <button v-on:click="add" @click="show = !show" >Agregar</button>
  </div>
  <div>
       <button v-on:click="eliminar"> Eliminar las completadas</button>
        <h4>Total de tareas: {{totalNotas}} tareas completadas:{{totalCompletadas}} </h4>
  </div>
       <div class="row mt-4  mx-0">
          <transition-group name='slide-fade' tag='ol' class="col-12">
          <notas @eliminarNota="borrar" v-for="(nota,index) in arrNotas" :nota="nota" :index="index" :key='nota'></notas>  
          </transition-group>    
       </div>
       <!-- <ul>
         <nota @eliminarNota="borrar" v-for="(nota,index) of arrNotas" :nota="nota" :index="index" :key="nota"></nota>
    </ul> -->
   
</div>

</template>

<script lang="js">
import notas from './nota.vue';
  export default  {
    name: 'contenido',
    components:{
      notas
    },
    props: [],
    mounted () {
    if (localStorage.getItem('arrNotas')) {
      try {
        this.arrNotas = JSON.parse(localStorage.getItem('arrNotas'));
      } catch(e) {
        localStorage.removeItem('arrNotas');
       }
     }
    },
    updated() {
        this.guardarNotas();
    },    
    data () {
      return {
        arrNotas:[],
        nuevaNota:null,
        show: true,
      }
    },
    methods: {
      add:function(){
        if(!this.nuevaNota) return;
          this.arrNotas.push({text:this.nuevaNota,acabada:false})
          this.nuevaNota="";
          this.guardarNotas();
      },
      eliminar:function(){
          this.arrNotas=this.arrNotas.filter(function(resultado){return resultado.acabada==false})
          this.guardarNotas();
      },
      borrar:function(key2){
        this.arrNotas.splice(this.arrNotas.indexOf(key2),1);
          this.guardarNotas();
      },
      guardarNotas() {
      const parsed = JSON.stringify(this.arrNotas);
      localStorage.setItem('arrNotas', parsed);
      }
    },
    computed: {
      totalNotas:function(){
        return this.arrNotas.length;
      },
      totalCompletadas: function(){
            var notasCompletadas=0;
            for(var nota of this.arrNotas){
                if(nota.acabada){
                    notasCompletadas++;
                }    
            }
           return notasCompletadas;
      }

    }
}
</script>

<style scoped lang="css">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-fade-move{
    transition: all .3s ease;
  }
  #notas input{
    width: 80%;
  }
  #notas{
    border-bottom-color: aqua;
  }
</style>
