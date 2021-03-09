<template>
  <ul class="gallery_filter list">
    <li class="active" data-filter="*"><a href="#">همه</a></li>
    <li
      v-for="(portfolio_cat, index) in portfolios_cat"
      :key="index"
      :data-filter="'.' + portfolio_cat.slug"
    >
      <a href="#">{{ portfolio_cat.name }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["portfolios_cat"],
};
</script>
<style scoped></style>
