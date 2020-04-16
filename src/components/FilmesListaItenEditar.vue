<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Título:</label>
            <input type="text" 
            class="form-control" 
            placeholder="Insira o título"
            :value="filme.titulo">
        </div>

        <div class="form-group">
            <label>Duração:</label>
            <input type="number" 
            class="form-control" 
            placeholder="Insira o tempo de duração"
            :value="filme.duracao">
        </div>

        <div class="form-group">
            <label>Ano:</label>
            <input type="number" 
            class="form-control" 
            placeholder="Insira o ano"
            :value="filme.ano">
        </div>

        <div class="form-group">
            <label>Diretor:</label>
            <input type="text" 
            class="form-control" 
            placeholder="Insira o diretor"
            :value="filme.diretor">
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        filme:{
            type: Object,
            required:true
        }
    }
}
</script>