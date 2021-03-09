<template>
  <!--================Feature Area =================-->
  <section class="feature_area white_feature p_120">
    <div class="container">
      <MainTitle :title='title' :subtitle='subtitle'></MainTitle>
      <OfferDetail></OfferDetail>
    </div>
  </section>
  <!--================End Feature Area =================-->
</template>
<script>
import OfferDetail from "./OfferDetail";
import MainTitle from "./../MainTitle";
export default {
  name: "offerings",
  components: {
    OfferDetail,
    MainTitle,
  },
  data() {
    return {
      title: "پیشنهادات به مشتریان من",
      subtitle:
        "اگر به دنبال کاست های خالی در وب هستید ، ممکن است در تفاوت قیمت بسیار گیج شوید. ممکن است هرکدام را با قیمتی کمتر از 17 دلار مشاهده کنید .",
    };
  },
};
</script>
<style scoped></style>
