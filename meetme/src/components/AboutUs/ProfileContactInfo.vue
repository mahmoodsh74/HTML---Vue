<template>
  <ul class="list basic_info">
    <li v-for="(contact_info, index) in contact_infos" :key="index">
      <i :class="'lnr ' + contact_info.icon"></i> {{ contact_info.text }}
    </li>
  </ul>
</template>
<script>
export default {
  props: ["contact_infos"],
};
</script>
<style scoped></style>
