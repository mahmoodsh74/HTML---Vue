<template>
  <div class="personal_text">
    <h5>سلام من</h5>
    <h3>{{ contact_infos.fullName }}</h3>
    <h4>{{ contact_infos.speciality }} هستم</h4>
    
    <p>
      {{ contact_infos.description }}
    </p>
    <ProfileContactInfo :contact_infos="contact_infos"></ProfileContactInfo>

    <ProfileSocial :socials="contact_infos"></ProfileSocial>
    
  </div>
</template>
<script>
import ProfileContactInfo from "./ProfileContactInfo";
import ProfileSocial from "./ProfileSocial";
import { db } from "./../../firebase";
export default {
  components: {
    ProfileContactInfo,
    ProfileSocial,
  },
  data() {
    return {
      contact_infos: [],
    };
  },
  methods: {
    readData() {
      db.collection("contact_infos")
        .get()
        .then((querySnapshot) => {
          // this.facts = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.contact_infos=doc.data();
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
