<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <div class="back-to-top" v-show="visible" @click="backToTop">Back</div>
    <p v-for="text in 25" :key="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eleifend ante, et vehicula ante
      posuere id. Integer fermentum ultrices dui vitae accumsan. Quisque metus eros, accumsan quis nisl vel,
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
      visible: false
    }),

    mounted() {
      window.scroll = () => {
        let scroll = document.documentElement.scrollTop
        if (scroll > 0) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      }

      window.addEventListener('scroll', this.followScroll)
    },

    methods: {
      followScroll() {
        this.visible = (window.pageYOffset > 250)
      },

      backToTop() {
        window.scroll()
      }
    }
  };
</script>

<style scoped>
  .back-to-top {
    position: fixed;
    cursor: pointer;
    left: 90%;
    top: 96%;
    background: #000;
    color: #fff;
    height: 100px;
  }
</style>
