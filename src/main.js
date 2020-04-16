import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * Para gerenciar a troca de informações...
 * 
 * A utilização desse metódo é recomendada para, 
 * aplicações de pequeno e médio porte
 * 
 * Para implementar metódos que sejam comuns em diversos components
 * 
 */
export const eventBus = new Vue({

  methods:{
    selecionarFilme(filmeSelecionado){

      this.$emit('selecionarFilme', filmeSelecionado)
    
    }
  }

})

new Vue({
  render: h => h(App),
}).$mount('#app')
