<template>
  <div class="feature_inner row">
    <div
      v-for="(offer, index) in offers"
      :key="index"
      class="col-lg-4 col-md-6"
    >
      <div class="feature_item">
        <i :class="offer.icon"></i>
        <h4>{{ offer.title }}</h4>
        <p>
          {{ offer.text }}
        </p>
      </div>
    </div>
  </div>
    
  
</template>
<script>

import { db } from "./../../firebase";
export default {
  name: "offerdetail",
  components: {
 
  },
  data() {
    return {
      offers: [],
    };
  },
  methods: {
    readData() {
      db.collection("offers")
        .get()
        .then((querySnapshot) => {
          // this.offers = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.offers = doc.data();
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
