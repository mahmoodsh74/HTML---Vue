<template>
  <div>
    <Top></Top>
    <router-view></router-view>
    <Down></Down>
  </div>
</template>
<script>
import Top from "./Header/Top";
import Down from "./Footer/Down";

export default {
  name: "wrapper",
  components: {
    Top,
    Down,
  },
};
</script>
