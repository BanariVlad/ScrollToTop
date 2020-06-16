import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("back", {
  bind: function (el, binding) {
    el.style.position = 'fixed'
    el.style.top = binding.value + '%'
    el.style.left = binding.value + '%'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
