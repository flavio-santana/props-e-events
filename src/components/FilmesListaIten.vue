<template>
    <li class="list-group-item">
        <span>{{ filmeId }} || {{ filmeTituloConcatenado }} || {{ filmeAno }}</span>
        <button class="btn btn-success float-right" title="Editar">Editar</button>
    </li>
</template>

<script>
export default{
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
        }
    },
    computed :{
        filmeId(){
            return `Id : ${this.id}`
        },
        filmeTituloConcatenado(){
            return `Título : ${this.titulo}`
        },
        filmeAno(){
            return `Ano : ${this.ano}`
        }       

    },
    created(){
        console.log(typeof this.titulo)
    }
}
</script>