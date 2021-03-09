<template>
  <div class="skill_main">
    <div v-for="(skill,index) in skills" :key="index"  class="skill_item">
      <h4 >{{skill.name}} <span class="counter">{{skill.value}}</span>%</h4>
      <div class="progress_br">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :aria-valuenow="skill.value"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
      </div>
 
</template>
<script>

export default {
  name: "skill",
  props:['skills'],
  data() {
    return {
      
    };
  },
  
};
</script>
<style scoped></style>
