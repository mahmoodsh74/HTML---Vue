<template>
  <div>
    <BackLink :back="back" :title1="title1"></BackLink>

    <!--================Feature Area =================-->

    <Offerings></Offerings>

    <!--================End Feature Area =================-->
  </div>
</template>
<script>
import BackLink from "./../BackLink";
import Offerings from "./Offerings";

export default {
  name: "services",
  components: {
    BackLink,
    Offerings,
  },
  data() {
    return {
      title1: "  سرویس ها",
      back: "Services",
    };
  },
};
</script>
<style scoped></style>
