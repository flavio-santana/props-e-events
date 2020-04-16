import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * Para gerenciar a troca de informações...
 * 
 * A utilização desse metódo é recomendada para, 
 * aplicações de pequeno e médio porte
 * 
 */
export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
