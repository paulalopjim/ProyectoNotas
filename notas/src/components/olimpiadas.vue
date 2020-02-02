<template lang="html">
  <div id=olimpiadas>
      <div class="jumbotron jumbotron-fluid " id="imagenPrincipal">
          <div class="container">
              <h1 class="display-3" >
                明日発見</h1>
              <p class="lead">Descubre el mañana</p>
          </div>
      </div>
      <div class="row mx-0">
    <div class="col-12 col-md-8">
        <div class="row seccion">
            <div class="col-12 col-md-7 ">
                <h1>Atenas 1896</h1>
                <p> 
                    Los Juegos Olímpicos de Atenas 1896, conocidos oficialmente como Juegos de la I Olimpiada, 
                    se celebraron en Atenas, Grecia, entre el 6 y el 15 de abril de 1896. Participaron 241 atletas masculinos 
                    —no hubo participación femenina— de 14 países, que disputaron en 43 competiciones de 9 deportes. 
                    Fueron los primeros Juegos Olímpicos de la Edad Contemporánea.
                    A pesar de los muchos obstáculos y reveses, los Juegos Olímpicos de 1896 fueron reconocidos como un gran éxito.
                    Tuvieron la mayor participación internacional en un evento deportivo hasta esa fecha. 
                    El Estadio Panathinaikó, que fue el primer gran estadio del mundo moderno, 
                    vio rebasada su capacidad con la multitud de personas más grande que se había reunido 
                    jamás para ver un evento deportivo.Lo más sobresaliente para los griegos fue la victoria de su compatriota 
                    Spiridon Louis en la maratón. El competidor más exitoso fue el luchador y gimnasta alemán Carl Schuhmann, 
                    que ganó cuatro medallas de oro.Desde entonces, cada cuatro años, 
                    deportistas de todos los países se reúnen para competir entre ellos. 
                    Solo las grandes guerras del siglo XX han impedido la realización de los Juegos Olímpicos, 
                    pero al culminar estas, se ha continuado con la tradición. Atenas organizó nuevamente los Juegos Olímpicos en 2004.                   
                </p>
            </div>
            <div class="col-12 col-md-5 imagen">
                <img src="../assets/atenas1896.jpeg" alt="">
            </div>
        </div>
        <div class="row seccion">
            <div class="col-12 col-md-5 imagen">
                <img src="../assets/paris1900.jpeg" alt="">
            </div>
            <div class="col-12 col-md-7 ">
                <h1>Paris 1900</h1>
                <p>
                    Los Juegos Olímpicos de París 1900, oficialmente Juegos de la II Olimpiada, 
                    son la segunda edición de las olimpiadas modernas. Tuvieron lugar en París, 
                    Francia, del 14 de mayo al 28 de octubre de 1900, en el marco de la Exposición Universal. 
                    La decisión de celebrar los Juegos de 1900 en París se tomó en la reunión del I Congreso Olímpico celebrado en 1894.
                    Tras los Juegos de 1896 Pierre de Coubertin, presidente del Comité Olímpico Internacional (COI),
                    quería organizar los Juegos de la II Olimpiada, pero Alfred Picard, comisario general de la Exposición Universal
                    quería organizar «competiciones internacionales de ejercicio físico y deportes» durante el evento.
                    El por entonces órgano rector del deporte en Francia, la Union des sociétés françaises de sports athlétiques (USFSA),
                    en noviembre de 1898 decidió finalmente celebrar las competiciones de la Exposición en lugar de los Juegos de Coubertin que,
                    en la primavera de 1899 se vio obligado a aceptar la propuesta de la USFSA: «Las competiciones de la Exposición 
                    se celebran en lugar de los Juegos Olímpicos de 1900 y cuentan como equivalentes a la II Olimpiada.» 
                    No hubo ceremonia de apertura ni de clausura, las pruebas se desarrollaron a lo largo de cinco meses y 
                    estos eventos no se denominan «Juegos Olímpicos» en los documentos oficiales ni en los carteles promocionales, 
                    por lo que muchos atletas ignorarían, algunos hasta su muerte, que habían competido en los Juegos Olímpicos.
                </p>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 tabla">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Grandes atletas de la historia</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Johnny Weissmuller</td>
                    </tr>
                    <tr>
                        <td scope="row">Jesse Owens</td>
                    </tr>
                    <tr>
                        <td scope="row">Nadia Comaneci</td>
                    </tr>
                    <tr>
                        <td scope="row">Michael Phelps</td>
                    </tr>
                    <tr>
                        <td scope="row">Usain Bolt</td>
                    </tr>
                    <tr>
                        <td scope="row">Simeone Biles</td>
                    </tr>
                </tbody>
        </table>
    </div>
    </div>
    
  </div>
</template>

<script lang="js">

  export default  {
    name: 'olimpiadas',
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
#imagenPrincipal{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.70),rgba(0, 0, 0, 0.800)),url("../assets/hero.jpeg");
    height: 95vh;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
}
#imagenPrincipal h1{
    color: white;
    font-size:6rem;
}
#imagenPrincipal p{
    color: white;
    font-size:3rem;
}
img{
    width: 100%;
}
.seccion{
    padding: 3.5rem;
}
.tabla{
   
}
.table th{
    text-align: center;
}
.table td{
    text-align: center;
}
</style>
