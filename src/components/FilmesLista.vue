<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">

        <FilmesListaIten filmeTitulo="O Irlandês"/>
        <FilmesListaIten filmeTitulo="Adoráveis Mulheres"/>
        <FilmesListaIten filmeTitulo="Era Uma Vez em… Hollywood"/>
        <FilmesListaIten filmeTitulo="Parasita"/>
        <FilmesListaIten filmeTitulo="História de um Casamento"/>
        <FilmesListaIten filmeTitulo="1917"/>
        <FilmesListaIten filmeTitulo="Coringa"/>
        <FilmesListaIten filmeTitulo="Ford vs Ferrari"/>
        <FilmesListaIten filmeTitulo="Jojo Rabbit"/>
        
      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo
  }
}
</script>
