<template>
  <div class="markerTemplate">
    <img :src="icon" :alt="text" width="20">
    <p class="tempText">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "markerTemplate",
  props: {
    text: String,
    icon: {
      type: String,
      default: 'http://yp.vincestudio.cn/cdn/ltzb.png'
    }
  }
}
</script>

<style scoped>
.tempText {
  background-color: red;
  color: blue;
  font-weight: bold;
  font-size: 12px;
}
</style>
