<template>
  <div class="tab-content" id="myTabContent">
    <SkillList
      v-for="(tabs_category, index) in tabs_categories"
      :key="index"
      :myactive="index"
      :tabs_category="tabs_category"
    ></SkillList>
  </div>
</template>
<script>
import SkillList from "./SkillList";

export default {
  name: "myexperiencestab",
  props: ["tabs_categories"],
  components: {
    SkillList,
  },
};
</script>
<style scoped></style>
