<template>
  <div>
  
<BackLink :back="back" :title1="title1"></BackLink>
   <h1>This is Elements</h1>
  </div>
</template>
<script>
import BackLink from './BackLink'
export default {
  name: "elements",
  components:{
    BackLink
  },
  data() {
    return {
      title1: "  عناصر",
      back: "Elements",
    };
  },
};
</script>
<style scoped></style>
