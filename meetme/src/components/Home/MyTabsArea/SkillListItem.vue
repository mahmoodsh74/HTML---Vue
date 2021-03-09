<template>
  <li>
    <span></span>
    <div class="media">
      <div class="d-flex">
        <p>{{ singletem.date }}</p>
      </div>
      <div class="media-body">
        <h4>{{ singletem.evidence }}</h4>
        <p>{{ singletem.field }}<br />{{ singletem.university }}</p>
      </div>
    </div>
  </li>
</template>
<script>
export default { props: ["singletem"] };
</script>
<style scoped></style>
