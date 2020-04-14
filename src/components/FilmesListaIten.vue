<template>
    
    <li class="list-group-item">
        <span>{{ id }} || {{ filmeTituloConcatenado }} || {{ ano }}</span>
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
        id:{
            type: Number,
            required: true,
        },
        titulo: {
            type: String,
            required: true,
        },
        ano: {
            type: Number,
            required: true,
        },
    },
    computed :{
        filmeId(){
            return `Id : ${this.id}`
        },
        filmeTituloConcatenado(){
            return `Título : ${this.titulo}`
        },
          
    },
    created(){
        console.log('Attrs: ' , this.$attrs)
    }
}
</script>