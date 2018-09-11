import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App),
}).$mount('#app');


// h is createElement
// new Vue({
//   el: '#app',
//   render: function(createElement) {
//     return createElement(App);
//   }
// });
