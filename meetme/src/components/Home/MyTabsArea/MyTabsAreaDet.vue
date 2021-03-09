<template>
  <div class="tabs_inner">
    <SkillTab :tabs_categories="tabs_categories[0]"></SkillTab>
    <MyTabContent :tabs_categories = "tabs_categories[0]"></MyTabContent>
  </div>
</template>
<script>
import SkillTab from "./SkillTab";

import MyTabContent from "./MyTabContent";
import { db } from "./../../../firebase";
export default {
  
  name: "mytabsareadet",
  components: {
    SkillTab,
    MyTabContent,
  },
  data() {
    return {
      tabs_categories: [],
    };
  },
  methods: {
    readData() {
      db.collection("tabs_categories")
        .get()
        .then((querySnapshot) => {
          // this.facts = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.tabs_categories.push(doc.data());
          });
        });
    },
  },
  created() {
    this.readData();
  },
};
</script>
<style scoped></style>
