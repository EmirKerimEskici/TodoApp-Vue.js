import Vue from 'vue'
import App from './App.vue'
import tag from './components/tag.vue'

Vue.component("tag-component" ,tag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
