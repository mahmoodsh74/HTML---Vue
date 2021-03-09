<template>
<div class="col-lg-3">
    <div v-for="(contact_info,index) in contact_infos" :key="index" class="contact_info">
              <div  class="info_item">
                <i  :class="'lnr' + contact_info.icon"></i>
                <h6>{{contact_info.text}}</h6>
               
              </div>

               

            </div>
            </div>
</template>
<script>
export default {
    props:['contact_infos']
}
</script>
<style scoped>

</style>