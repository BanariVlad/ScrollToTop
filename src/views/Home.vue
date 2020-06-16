<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="back-to-top" v-back="96" v-show="visible" @click="backToTop">Back</div>
    <p v-for="text in 25" :key="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus
      eleifend ante, et vehicula anteposuere id. Integer fermentum ultrices dui
      vitae accumsan. Quisque metus eros, accumsan quis nisl vel,
      molestie imperdiet lorem. Vivamus pulvinar id leo a suscipit. Vivamus rhoncus dui ac arcu placerat, aliquam
      auctor nisl rhoncus. Cras bibendum molestie consectetur. Praesent pulvinar, eros ut maximus vulputate, nunc
      magna bibendum mi, ac aliquam sem velit ac dui. Sed lorem odio, lobortis id molestie pretium, pretium et
      nunc.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    visible: false,
    scrollBack: ""
  }),

  mounted() {
    this.scrollBack = () => {
      let scroll = document.documentElement.scrollTop;
      if (scroll > 0) {
        scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    document.addEventListener("scroll", this.followScroll);
  },

  methods: {
    followScroll() {
      this.visible = window.pageYOffset > 250;
    },

    backToTop() {
      this.scrollBack();
    }
  }
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  cursor: pointer;
  background: #000;
  color: #fff;
  height: 100px;
}
</style>
