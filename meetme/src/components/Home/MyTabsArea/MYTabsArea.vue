<template>
  <!--================My Tabs Area =================-->
  <section class="mytabs_area p_120">
    <div class="container">
      <MyTabsAreaDet ></MyTabsAreaDet>
    </div>
  </section>
  <!--================End My Tabs Area =================-->
</template>
<script>
import MyTabsAreaDet from "./MyTabsAreaDet";
export default {
  name: "mytabsarea",
  components: {
    MyTabsAreaDet,
  },
  data() {
    return {
      
    };
  },
};
</script>
<style scoped></style>