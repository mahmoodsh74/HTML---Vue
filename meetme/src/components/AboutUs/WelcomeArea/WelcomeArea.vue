<template>
  <!--================Welcome Area =================-->
  <section class="welcome_area p_120">
    <div class="container">
      <div class="row welcome_inner">
        <div class="col-lg-6">
          <div class="welcome_text">
            <AboutMySelf></AboutMySelf>
            <Total></Total>
          </div>
        </div>
        <Skills></Skills>
      </div>
    </div>
  </section>
</template>
<script>
import AboutMySelf from "./AboutMySelf";
import Total from "./Total";
import Skills from "./Skills";
export default {
  name: "welcomearea",
  components: {
    AboutMySelf,
    Total,
    Skills,
  },
};
</script>
<style scoped></style>
