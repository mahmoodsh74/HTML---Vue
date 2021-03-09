<template>
  <div :class="'col-lg-4 col-md-4 col-sm-6 ' + portfolio.cat" >
    <div class="h_gallery_item">
      <div class="g_img_item">
        <img class="img-fluid" :src="portfolio.image" alt="" />
        <a class="light" href="../../../public/assets/img/gallery/project-1.jpg"
          ><img :src="portfolio.image" alt=""
        /></a>
      </div>
      <div class="g_item_text">
        <h4>{{ portfolio.name }}</h4>
        <p>{{ portfolio.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "portfoliodetail",
  props: ["portfolio", "portfolios"],
  data() {
    return {};
  },
};
</script>
<style scoped></style>
