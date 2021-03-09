<template>
  <!--================Home Gallery Area =================-->
  <section class="home_gallery_area p_120">
    <div class="container">
      <MainTitle :title="title" :subtitle="subtitle"></MainTitle>
      <div class="isotope_fillter">
        <PortfolioNav :portfolios_cat="portfolios_cat"></PortfolioNav>
      </div>
    </div>
    <div class="container">
      <div
        class="gallery_f_inner row imageGallery1"
        style="position: relative; height: 930px;"
      >
        <PortfolioDetail
          v-for="(portfolio, index) in portfolios"
          :key="index"
          :portfolio="portfolio"
          :portfolios="portfolios"
        ></PortfolioDetail>
        <PortfolioMore></PortfolioMore>
      </div>
    </div>
  </section>
  <!--================End Home Gallery Area =================-->
  
</template>
<script>
import { db } from "./../../firebase";
import MainTitle from "./../MainTitle";
import PortfolioNav from "./PortfolioNav";
import PortfolioDetail from "./PortfolioDetail";
import PortfolioMore from "./PortfolioMore";
export default {
  name: "portfolio",
  data() {
    return {
      title: "آخرین پروژه های من",
      subtitle: "کسانی که بسیار عاشق سیستم دوستدار محیط زیست هستند",
      portfolios_cat: [],
      portfolios: [],
    };
  },
  components: {
    MainTitle,
    PortfolioNav,
    PortfolioDetail,
    PortfolioMore,
  },
  methods: {
    readData() {
      db.collection("portfolios_cat")
        .get()
        .then((querySnapshot) => {
          // this.offers = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.portfolios_cat = doc.data();
          });
        });
      db.collection("portfolios")
        .get()
        .then((querySnapshot) => {
          // this.offers = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.portfolios = doc.data();
          });
        });
    },
  },
  created() {
    this.readData();
  },
};
</script>
<style scoped></style>
