<template>
  <div>
    <!-- Brand and toggle get grouped for better mobile display -->
    <router-link class="navbar-brand logo_h" :to="{ name: 'Home' }"
      ><img src="../../../static/assets/img/logo.png" alt=""
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <!-- Collect the nav links, forms, and other content for toggling -->
  </div>
</template>
<script>
export default {
  name: "logo",
  data() {
    return {};
  },
};
</script>
<style scoped></style>
