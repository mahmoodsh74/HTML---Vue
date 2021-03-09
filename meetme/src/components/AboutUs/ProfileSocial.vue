<template>
  <ul class="list personal_social">
    <li v-for="(social, index) in socials.itemSocial" :key="index">
      <a href="#"><i :class="'fa ' + social.icon"></i></a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["socials"],
};
</script>
<style scoped></style>
