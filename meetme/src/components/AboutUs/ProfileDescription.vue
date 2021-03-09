<template>
  <!--================Home Banner Area =================-->
  <section class="home_banner_area">
    <div class="container box_1620">
      <div class="banner_inner d-flex align-items-center">
        <div class="banner_content">
          <div class="media">
            <ProfileImg></ProfileImg>
            <div class="media-body">
              <ProfileText></ProfileText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Home Banner Area =================-->
</template>
<script>
import ProfileImg from "./ProfileImg";
import ProfileText from "./ProfileText";

export default {
  name: "profiledescription",
  components: {
    ProfileImg,
    ProfileText,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
