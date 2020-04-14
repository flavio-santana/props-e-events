<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <div class="list-group list-group-flush">
        
        <FilmesListaIten 
          v-for="filme in filmes" 
          :key="filme.id" 
          :filme="filme"
          :class="aplicarClasseAtive(filme)" 
          @selecionarFilme="filmeSelecionado = $event"/>
        
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
        {id: 1, titulo: 'O Irlandês', ano: 2018, duracao: 180, diretor: 'Flávio Santana'},
        {id: 2, titulo: 'Adoráveis Mulheres', ano: 2018, duracao: 280, diretor: 'Flávio Santana'},
        {id: 3, titulo: 'Era Uma Vez em… Hollywood', ano: 2018, duracao: 360, diretor: 'Flávio Santana'},
        {id: 4, titulo: 'Pantera Negra', ano: 2018, duracao: 158, diretor: 'Flávio Santana'},
        {id: 5, titulo: 'DeadPool 2', ano: 2018, duracao: 177, diretor: 'Flávio Santana'},
      ],
      filmeSelecionado: undefined
      
    }
  },
  methods:{
    aplicarClasseAtive(filmeIterado){
      return {
        active: this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id 
      }
    }
  }
}
</script>
