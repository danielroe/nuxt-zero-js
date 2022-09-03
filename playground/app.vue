<template>
  <div>This page needs no JavaScript (of course!)!</div>
</template>
<script lang="ts" setup>
useHead({
  // testing that this should be removed
  link: [
    { rel: 'prefetch', href: '/api/prefetch' }
  ]
})
</script>
<style scoped>
div {
  color: red;
}
</style>
