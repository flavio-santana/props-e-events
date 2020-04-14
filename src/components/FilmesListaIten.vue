<template>
    
    <li class="list-group-item">
        <span>{{ filme.id }} || {{ filme.titulo }} || {{ filme.ano }} || {{ filme.duracao }} || {{ filme.diretor }}</span>
        <button class="btn btn-success float-right" title="Selecionar">Selecionar</button>
    </li>

</template>
<script>
export default{
    inheritAttrs: false,
    props: {
        filme:{
            type: Object,
            required: true,
        }
    },

}
</script>