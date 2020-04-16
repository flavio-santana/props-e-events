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
          :filme="filme"
          :class="aplicarClasseAtiva(filme)"
          @selecionarFilme="filmeSelecionado = $event"/>
        
      </div>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo 
      v-if="!editar"
      :filme="filmeSelecionado"
      @editarFilme="editarFilme"/>

      <FilmesListaItenEditar
      v-else
      :filme="filmeSelecionado"/>

    </div>

  </div>
</template>

<script>

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenEditar,
    FilmesListaItenInfo
  },
  data (){  
    return {
      
      filmes : [
        {id: 1, titulo: 'O Irlandês', ano: 2018, duracao: 180, diretor: 'E'},
        {id: 2, titulo: 'Adoráveis Mulheres', ano: 2018, duracao: 280, diretor: 'D'},
        {id: 3, titulo: 'Era Uma Vez em… Hollywood', ano: 2018, duracao: 360, diretor: 'C'},
        {id: 4, titulo: 'Pantera Negra', ano: 2018, duracao: 158, diretor: 'B'},
        {id: 5, titulo: 'DeadPool 2', ano: 2018, duracao: 177, diretor: 'A'},
      ],
      filmeSelecionado: undefined,
      editar: false
    }
  },
  methods:{
    aplicarClasseAtiva(filmeIterado){
      return {
        active : this.filmeSelecionado && this.filmeSelecionado.id === filmeIterado.id 
      }
    },
    editarFilme(filme){
      this.editar = true
      this.filmeSelecionado = filme
    }

  }
}
</script>
