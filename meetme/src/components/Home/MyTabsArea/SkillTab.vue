<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li
      class="nav-item"
      v-for="(tabs_category, index) in tabs_categories"
      :key="index"
    >
      <a
        :class="{
          'active': index === 'MyEducation',
          'show': index === 'MyEducation',
          'nav-link': true,
        }"
        data-toggle="tab"
        :href="'#' + tabs_category.slug"
        role="tab"
        aria-controls="home"
        aria-selected="true"
        >{{ tabs_category.name }}</a
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "skilltab",
  props: ["tabs_categories"],
  data() {
    return {};
  },
};
</script>
<style scoped></style>
