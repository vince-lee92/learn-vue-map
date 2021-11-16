<template>
  <div id="app">
    <DragRoute/>
  </div>
</template>
<script>
export default {
  components: {
    DragRoute: () => import('./views/DragRoute')
  }
}
</script>
