<template>
  <div>
    <!--================Footer Area =================-->
    <footer class="footer_area p_120">
      <div class="container">
        <div class="row footer_inner">
          <About></About>

          <Newsletter></Newsletter>

          <Follow></Follow>
        </div>
      </div>
    </footer>
    <!--================End Footer Area =================-->
  </div>
</template>
<script>
import About from "./About";
import Newsletter from "./Newsletter";
import Follow from "./Follow";
export default {
  name: "down",
  components: {
    About,
    Newsletter,
    Follow,
  },
};
</script>
<style scoped></style>
