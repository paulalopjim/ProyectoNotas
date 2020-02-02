<template lang="html">   
<div>
      <nav class="navbar navbar-expand-sm navbar-light d-flex justify-content-around" style="background-color:white;">
          <a class="navbar-brand" href="#">Notas</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav mr-auto align-midle mt-2 ml-4 mt-lg-0">
                <li class="nav-item active mr-2">
                    <router-link to="/notas">Notas</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/olimpiadas">Olimpiadas</router-link>
                </li>
              </ul>
                <button class="btn btn-outline-primary my-2 my-sm-0" id="registro" v-on:click="abrirModal2()">Registro</button>
                <button class="btn btn-outline-primary my-2 my-sm-0" id="login" v-on:click="abrirModal()">Login</button>
            </div>
      </nav>
      
      <!-- ModalRegister -->
    <div class="modal fade" id="modelRegister" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Inicia Sesión</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">E-mail</label>
                        <input type="text" name="Nombre" id="" class="form-control" placeholder=""
                            aria-describedby="helpId">

                        <label for="">Contraseña</label>
                        <input type="password" name="Nombre" id="" class="form-control" placeholder=""
                            aria-describedby="helpId">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Entrar</button>
                </div>
            </div>
        </div>
    <!-- ModalLogin -->
    <div class="modal fade" id="modelLogin" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Regístrate</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Nombre:</label>
                        <input type="text" name="Nombre" id="" class="form-control">

                        <label for="">Apellidos:</label>
                        <input type="text" name="Apellidos" id="" class="form-control" >

                        <label for="">E-mail</label>
                        <input type="text" name="Apellidos" id="" class="form-control" >
                        <br>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-primary active">
                                <input type="radio" name="Género" value="Hombre" id="" checked autocomplete="off"> Hombre
                            </label>
                            <label class="btn btn-primary">
                                <input type="radio" name="Género" value="Mujer" id="" autocomplete="off"> Mujer
                            </label>
                        </div>
                        <br>
                        <br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1"><i class="fa fa-facebook-square"
                                style="font-size:2rem;color:rgb(27, 128, 223)"></i></label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                            <label class="form-check-label" for="inlineRadio2"><i class="fa fa-instagram"
                                style="font-size:2rem;color:rgb(27, 128, 223)"></i></label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                            <label class="form-check-label" for="inlineRadio3"><i class="fa fa-github"
                                style="font-size:2rem;color:rgb(27, 128, 223)"></i></label>
                          </div>

                          <br>
                          <br>
                        <label for="">Contraseña</label>
                        <input type="password" name="Nombre" id="" class="form-control" placeholder=""
                            aria-describedby="helpId">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Registrar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script lang="js">
const $ = require('jquery')
window.$ = $
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
      abrirModal:function () {
        $('#modelLogin').modal("show");
      },
      abrirModal2:function () {
        $('#modelRegister').modal("show");
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
