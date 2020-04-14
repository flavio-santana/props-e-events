<template>
    
    <li class="list-group-item">
        <span>{{ filme.id }} || {{ filme.titulo }} || {{ filme.ano }} || {{ filme.duracao }} || {{ filme.diretor }}</span>
        <button class="btn btn-success float-right" title="Editar">Editar</button>
    </li>
    
    <!--
    <input type="text" :value="titulo" :placeholder="$attrs.placeholder"> 
    -->

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
    created(){
        console.log('Attrs: ' , this.$attrs)
    }
}
</script>