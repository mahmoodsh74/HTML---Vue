<template>
  <div class="testi_inner">
    <div class="testi_slider owl-carousel">
      <div class="item">
        <div
          v-for="(certificate, index) in certificates"
          :key="index"
          class="testi_item"
        >
          <p>{{ certificate.text }}</p>
          <h4>{{ certificate.title }}</h4>
          <a href="#"><i class="fa fa-star"></i></a>
          <a href="#"><i class="fa fa-star"></i></a>
          <a href="#"><i class="fa fa-star"></i></a>
          <a href="#"><i class="fa fa-star"></i></a>
          <a href="#"><i class="fa fa-star-half-o"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "./../../firebase";
export default {
  name: "TestimonalsItem",
  data() {
    return {
      certificates: []
    };
  },
  methods: {
    readData() {
      db.collection("certificates")
        .get()
        .then(querySnapshot => {
          // this.facts = querySnapshot;
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            this.certificates = doc.data();
          });
        });
    }
  },
  created() {
    this.readData();
  }
};
</script>
<style scoped></style>
