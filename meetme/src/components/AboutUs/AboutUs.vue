<template>
  <div>
    <BackLink :back=back :title1=title1></BackLink>
    <ProfileDescription></ProfileDescription>
    <WelcomeArea></WelcomeArea>
    <Testimonals></Testimonals>
  </div>
</template>
<script>
import BackLink from "./../BackLink";
import ProfileDescription from "./ProfileDescription";
import WelcomeArea from "./WelcomeArea/WelcomeArea";
import Testimonals from "./../Testimonals/Testimonals";

export default {
  name: "aboutUs",
  components: {
    BackLink,
    ProfileDescription,
    WelcomeArea,
    Testimonals,
  },
  data(){
    return{
      title1:"  درباره ما",
      back:"AboutUs"
    }
  }
};
</script>
<style scoped></style>
