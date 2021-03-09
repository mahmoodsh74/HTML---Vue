<template>
  <!--================Testimonials Area =================-->
  <section class="testimonials_area p_120">
    <div class="container" id="container-custom">
      <MainTitle :title='title' :subtitle='subtitle'></MainTitle>
      <TestimonalsItem></TestimonalsItem>
    </div>
  </section>
  <!--================End Testimonials Area =================-->
</template>
<script>
import MainTitle from "./../MainTitle";
import TestimonalsItem from "./TestimonalsItem";
export default {
  name: "Testimonals",
  components: {
    MainTitle,
    TestimonalsItem,
  },
  data(){
    return{
      title:"گواهینامه ها",
      subtitle:"اگر به دنبال کاست های خالی در وب هستید ، ممکن است در تفاوت قیمت بسیار گیج شوید. ممکن است هرکدام را با قیمتی کمتر از 17 دلار مشاهده کنید ."
    }
  }
};
</script>
<style scoped></style>
