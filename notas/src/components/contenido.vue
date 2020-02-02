<template lang="html">

<div class="mx-0 ">
  <form class="formu">
    <div id="notas" class="row mt-4 d-flex justify-content-center mx-0 form-group ">
      <input type="text" v-model="nuevaNota" v-on:keyup.enter="add" placeholder="¿que quieres recordar?">
      <button v-on:click="add" @click="show = !show" >Agregar</button>
    </div>
    <div class="row mt-4 d-flex justify-content-center mx-0 form-group" id="buscar">
      <input  type="text" v-model="buscar" placeholder="Buscar nota">
    </div>
  </form>
  <div class="formu">
    <h5>Total de tareas: {{totalNotas}} tareas completadas:{{totalCompletadas}} </h5>
    <a v-on:click="eliminar"> Eliminar las completadas</a>
  </div>
       <div class="row mt-4  mx-0">
          <transition-group name='slide-fade' tag='ol' class="col-12">
          <notas @eliminarNota="borrar" v-for="(nota,index) in ListaArray" :nota="nota" :index="index" :key='nota'></notas>  
          </transition-group>    
       </div>   
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
        buscar:"",
        show: true,
      }
    },
    methods: {
      add:function(){
        if(!this.nuevaNota) return;
          this.arrNotas.push({text:this.nuevaNota,acabada:false,fecha:new Date().toLocaleString()})
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
      const guardar = JSON.stringify(this.arrNotas);
      localStorage.setItem('arrNotas', guardar);
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
      },
      ListaArray: function () {
      var busca=this.buscar;
      return this.arrNotas.filter(function (nota) {
        return nota.text.indexOf(busca) != -1
      })
    }

    }
}
</script>

<style scoped lang="css">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
#notas input {
  width: 80%;
}
#buscar input {
  width: 90%;
}
a {
  color: #ff3b3f;
}
.formu {
  border-bottom-color: gray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>
