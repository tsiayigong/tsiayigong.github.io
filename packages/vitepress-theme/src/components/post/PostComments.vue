<script setup lang="ts">
import Giscus from '@giscus/vue'
</script>

<template>
  <Giscus
    id="comments"
    repo="tsiayigong/tsiayigong.github.io"
    repoId="R_kgDOIgWCOA"
    category="Comments"
    categoryId="DIC_kwDOIgWCOM4CpJl8"
    mapping="pathname"
    theme="preferred_color_scheme"
    loading="lazy"
  />
</template>

<style scoped>
giscus-widget::part(iframe) {
  @apply mt-8;
}
</style>
