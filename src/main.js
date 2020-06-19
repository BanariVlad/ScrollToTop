import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.directive("back-to-top", {
  bind(el) {
    let visible = false;
    el.style.display = "none";
    el.style.fontSize = "35px";
    el.innerHTML = "🠕";
    el.style.top = "93%";
    el.style.left = "93%";
    el.style.width = "50px";
    el.style.height = "50px";
    el.style.position = "fixed";
    el.style.cursor = "pointer";
    el.style.borderRadius = "100%";
    el.style.color = "#fff";
    el.style.background = "#000";

    const scrollBack = () => {
      let scroll = document.documentElement.scrollTop;
      if (scroll > 0) {
        scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    const followScroll = () => {
      visible = window.pageYOffset > 250;
      visible ? (el.style.display = "block") : (el.style.display = "none");
    };

    document.addEventListener("scroll", followScroll);
    el.addEventListener("click", scrollBack);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
