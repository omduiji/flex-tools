import Vue from 'vue'
import App from "./vue/components/App.vue";
import Block from "./vue/components/Block.vue"
import Flexo from './vue/components/Flexo.vue'

Vue.component(Block.name, Block);
Vue.component(Flexo.name, Flexo);

new Vue({
  el: '#app',
  render: h => h(App)
})
