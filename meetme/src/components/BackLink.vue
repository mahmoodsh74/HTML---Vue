<template>
  <div>
    <section class="banner_area">
      <div class="box_1620">
        <div class="banner_inner d-flex align-items-center">
          <div class="container">
            <div class="banner_content text-center">
              <h2>{{title1}}</h2>
              <div class="page_link">
                <router-link :to="{ name: 'Home' }">صفحه اصلی </router-link>
                <router-link  :to="{back}">{{title1}}</router-link>
                <!-- <slot name="back"></slot> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "backlink",
  props:['back','title1'],
  
};
</script>
<style scoped></style>
