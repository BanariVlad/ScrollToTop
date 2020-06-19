<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-back-to-top></div>
    <p v-for="text in 25" :key="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus
      eleifend ante, et vehicula anteposuere id. Integer fermentum ultrices dui
      vitae accumsan. Quisque metus eros, accumsan quis nisl vel, molestie
      imperdiet lorem. Vivamus pulvinar id leo a suscipit. Vivamus rhoncus dui
      ac arcu placerat, aliquam auctor nisl rhoncus. Cras bibendum molestie
      consectetur. Praesent pulvinar, eros ut maximus vulputate, nunc magna
      bibendum mi, ac aliquam sem velit ac dui. Sed lorem odio, lobortis id
      molestie pretium, pretium et nunc.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style scoped></style>
