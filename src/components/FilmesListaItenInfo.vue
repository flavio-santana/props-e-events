<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card" v-if="filme">
            <div class="card-body">
                <h4 class="card-title">Filme: {{filme.titulo}}</h4>
                <h5 class="card-title">Duração: {{filme.duracao}}</h5>
                <h5 class="card-title">Ano: {{filme.ano}}</h5>
                <h5 class="card-title">Diretor: {{filme.diretor}}</h5>
                <button @click="editar" class="btn btn-danger float-right">Editar</button>
            </div>
        </div>

        <p v-else>Nenhum filme selecionado</p>

    </div>
</template>
<script>

import { eventBus } from './../main'

export default {
    data(){
        return {
            filme: undefined
        }
    },
    created(){
        eventBus.$on('selecionarFilme', (filmeSelecionado) => {
            this.filme = filmeSelecionado
        })
    },
    methods:{
        editar(event){
            this.$emit('editarFilme',this.filme)
        }

    }
}
</script>