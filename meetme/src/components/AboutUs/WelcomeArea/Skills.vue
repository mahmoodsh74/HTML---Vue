<template>
  <div class="col-lg-6">
    <div class="tools_expert">

      <SkillItem :skills="skills"></SkillItem>
</div>
    </div>
  
</template>
<script>
import SkillItem from "./SkillItem";
import { db } from "./../../../firebase";
export default {
  name: "skills",
  components: {
    SkillItem,
  },
  data(){
    return{
      skills: [],
    }
  },
  methods: {
    readData() {
      db.collection("skills")
        .get()
        .then((querySnapshot) => {
          // this.facts = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.skills=doc.data();
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
