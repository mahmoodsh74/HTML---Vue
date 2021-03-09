<template>
  <div>
    <Top></Top>
    <ProfileDescription></ProfileDescription>
    <WelcomeArea></WelcomeArea>
    <MyTabsArea></MyTabsArea>
    <Offerings></Offerings>
    <Portfolio></Portfolio>
    <Testimonals></Testimonals>
  </div>
</template>
<script>
import Top from "./../Header/Top";
import ProfileDescription from "./../AboutUs/ProfileDescription";
import WelcomeArea from "./../AboutUs/WelcomeArea/WelcomeArea";
import MyTabsArea from "./MyTabsArea/MYTabsArea";
import Offerings from "./../Servis/Offerings";
import Portfolio from "./../Portfolio/Portfolio";
import Testimonals from "./../Testimonals/Testimonals";


export default {
  name: "home",
  components: {
    Top,
    ProfileDescription,
    WelcomeArea,
    MyTabsArea,
    Offerings,
    Portfolio,
    Testimonals,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style></style>
