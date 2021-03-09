<template>
  <div>
    
    <BackLink :back="back" :title1="title1"></BackLink>
    <!--================Home Gallery Area =================-->
    <Portfolio></Portfolio>
    <!--================End Home Gallery Area =================-->
  </div>
</template>
<script>
import BackLink from "./../BackLink";
import Portfolio from "./Portfolio";
export default {
  name: "portfolioall",
  components: {
    BackLink,
    Portfolio,
  },
  data() {
    return {
      title1: "  نمونه کارها",
      back: "Portfolio",
    };
  },
};
</script>
<style scoped></style>
