<template lang="html">
<div class="mx-0">
    <footer class="row mx-0 d-flex justify-content-center">
      <ul class="d-flex justify-content-around mt-2">
        <a href="#"><img alt="Borrar" id='redes' src="../assets/face.png"></a>
        <a href="#"><img alt="Borrar" id='redes' src="../assets/twt.png"></a>
        <a href="#"><img alt="Borrar" id='redes' src="../assets/yt.png"></a>
      </ul>
    </footer>
</div>
</template>

<script lang="js">

  export default  {
    name: 'footer',
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
ul{
  width: 100%;
}
#redes{
    width: 3rem;
    height: 3rem;
}
footer{
  border-top-color: gray;
  border-top-style: solid;
  border-top-width: 1px;
  background-color: white;
}
</style>
