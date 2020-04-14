<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">

        <!--
        <FilmesListaIten/>
        -->

        
        <FilmesListaIten 
          v-for="filme in filmes" 
          :key="filme.id" 
          placeholder="Título do filme"
          v-bind="filme"/>
        
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
  },
  data (){  
    return {
      
      filmes : [
        {id: 1, titulo: 'O Irlandês', ano: 2018, diretor: 'Flávio Santana'},
        {id: 2, titulo: 'Adoráveis Mulheres', ano: 2018, diretor: 'Flávio Santana'},
        {id: 3, titulo: 'Era Uma Vez em… Hollywood', ano: 2018, diretor: 'Flávio Santana'},
        {id: 4, titulo: 'Pantera Negra', ano: 2018, diretor: 'Flávio Santana'},
        {id: 5, titulo: 'DeadPool 2', ano: 2018, diretor: 'Flávio Santana'},
      ]
      
    }
  }
}
</script>
