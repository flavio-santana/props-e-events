<template>
    
    <li class="list-group-item">
        <span>{{ filme.id }} || {{ filme.titulo }} || {{ filme.ano }} || {{ filme.duracao }} || {{ filme.diretor }}</span>
        <button @click="selecionar" class="btn btn-success float-right" title="Selecionar">Selecionar</button>
    </li>

</template>
<script>

import { eventBus } from './../main'

export default{
    inheritAttrs: false,
    props: {
        filme:{
            type: Object,
            required: true,
        }
    },
    methods: {
        selecionar(event){
            eventBus.selecionarFilme(this.filme)
        }
    }
}
</script>