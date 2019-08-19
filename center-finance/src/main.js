import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.directive('inclined-word',
  function(el, binding) {
    el.innerHTML = window.InclinedWord(binding.value.number, binding.value.titles);
  })

window.InclinedWord = function(num, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
}

var Article = require('./components/Article.vue').default

Vue.use(VueRouter)

var router = new VueRouter({
  
    routes: [
        {
            path: '/article/:articleId',
            component: Article,
            name: 'article',
            props: true
        }
    ]
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
