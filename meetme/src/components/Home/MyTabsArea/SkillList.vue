<template>
  <div
    :class="{
      active: myactive === 'MyEducation',
      show: myactive === 'MyEducation',
      'tab-pane fade': true,
    }"
    :id="tabs_category.slug"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <ul class="list">
      <SkillListItem
        v-for="(item, index) in tabs_category.items2"
        :key="index"
        :singletem="item"
      ></SkillListItem>
    </ul>
  </div>
</template>
<script>
import SkillListItem from "./SkillListItem";

export default {
  name: "myeducationlist",
  components: {
    SkillListItem,
  },
  props: ["tabs_category", "myactive"],
  data() {
    return {};
  },
};
</script>
<style scoped>
/* .d-flex{
  text-align: left !important;
} */
/* .media-body{
  text-align: right !important;
} */
</style>
