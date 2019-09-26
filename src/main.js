import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.directive('listener', {
  bind(el, binding, vnode) {
    el.addEventListener('click', function() {
      el.style.backgroundColor = binding.value
      if (binding.arg == 'grow') {
        el.style.width = '70px'
        el.style.height = '70px'
      }
    })
  }
})

Vue.filter('stringCount', function(value) {
  console.log("ran count filter")
  return value = value + " (" + value.length + ")";
})

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
