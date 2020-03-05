<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcatenado }}</span>
        <button class="btn btn-success float-right" title="Editar">Editar</button>
    </li>
</template>

<script>
export default{
    props: {
        filmeTitulo: {
            type: String,
            //required: true,
            //default: 'Sem dados',
            default(){
                return 'Sem dados'
            },
            validator(filmeTitulo){
                return filmeTitulo.includes('Sem dados 2...')
            }
        }
    },
    computed :{
        filmeTituloConcatenado(){
            return `Título : ${this.filmeTitulo}`
        }
    },
    created(){
        console.log(typeof this.filmeTitulo)
    }
}
</script>