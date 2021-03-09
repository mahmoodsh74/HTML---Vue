<template>
  <div class="row">
    <div v-for="(total, index) in totals[0]" :key="index" class="col-md-4">
      <div class="wel_item">
        <i :class="'lnr ' + total.icon"></i>
        <h4>{{ total.title }}</h4>
        <p>{{ total.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "./../../../firebase";
export default {
  name: "total",
  components: {},
  data() {
    return {
      totals: [],
    };
  },
  methods: {
    readData() {
      db.collection("totals")
        .get()
        .then((querySnapshot) => {
          // this.facts = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.totals.push(doc.data());
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
