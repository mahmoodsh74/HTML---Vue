<template>
  <div>
    <BackLink :back="back" :title1="title1"></BackLink>

    <!--================Contact Area =================-->
    <section class="contact_area p_120">
      <div class="container">
        <div class="row">
            <ContactInfo :contact_infos="contact_infos"></ContactInfo>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
    <!--================Contact Area =================-->
  </div>
</template>
<script>
import BackLink from "./../BackLink";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { db } from "./../../firebase";
export default {
  name: "contactus",
  components: {
    BackLink,
    ContactInfo,
    ContactForm
  },
   data() {
    return {
      title1: "  تماس با ما",
      back: "Contact",
      contact_infos:[]
    };
  },
   methods: {
    readData() {
      db.collection("contact_infos")
        .get()
        .then((querySnapshot) => {
          // this.offers = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.contact_infos = doc.data();
          });
        });
    },
  },
  created() {
    this.readData();
  },
};
</script>
<style></style>
