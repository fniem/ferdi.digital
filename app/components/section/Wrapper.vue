<template>
  <div :id="id" class="section-wrapper" role="region">
    <div class="container section">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<style>
.section-wrapper {
  padding-bottom: calc(1rem + 3vw);

  @media screen and (min-width: 768px) {
    width: 75%;
    margin-inline: auto;
  }
}
</style>