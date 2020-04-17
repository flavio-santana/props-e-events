<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Id:</label>
            <input type="number" 
            class="form-control" 
            placeholder="Insira o título"
            :value="filme.id"
            @input="filmeSelecionado = {propriedade: 'id', valor: $event.target.value}">
        </div>

        <div class="form-group">
            <label>Título:</label>
            <input type="text" 
            class="form-control" 
            placeholder="Insira o título"
            :value="filme.titulo"
            @input="filmeSelecionado = {propriedade: 'titulo', valor: $event.target.value}">
        </div>

        <div class="form-group">
            <label>Duração:</label>
            <input type="number" 
            class="form-control" 
            placeholder="Insira o tempo de duração"
            :value="filme.duracao"
            @input="filmeSelecionado = {propriedade: 'duracao', valor: $event.target.value}">
        </div>

        <div class="form-group">
            <label>Ano:</label>
            <input type="number" 
            class="form-control" 
            placeholder="Insira o ano"
            :value="filmeSelecionado.ano"
            @input="filmeSelecionado = {propriedade: 'ano', valor: $event.target.value}">
        </div>

        <div class="form-group">
            <label>Diretor:</label>
            <input type="text" 
            class="form-control" 
            placeholder="Insira o diretor"
            :value="filmeSelecionado.diretor"
            @input="filmeSelecionado = {propriedade: 'diretor', valor: $event.target.value}">
        </div>

        <button @click="salvarFilme" class="btn btn-primary float-right">Salvar</button>
        
    </div>
</template>

<script>

import { eventBus } from './../main'

export default {
    props:{
        filme:{
            type: Object,
            required:true
        }
    },
    data(){
        return {
            filmeLocal:this.filme
        }
    },
    computed:{
        filmeSelecionado:{
            set(dados){
                this.filmeLocal = Object.assign(
                    {},
                    this.filmelocal,
                    {[dados.propriedade] : dados.valor}
                )
            },
            get(){
                return this.filme
            }
        }
    },
    methods:{
        salvarFilme(event){
            eventBus.atualizarFilme(this.filmeLocal)
        }
    }
}
</script>