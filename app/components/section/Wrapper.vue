<template>
  <h1 v-if="title" :id="title ? `section-title-${id}` : undefined">
    {{ title }}
  </h1>
  <div :id="id" class="section-wrapper" role="region" :aria-labelledby="title ? `section-title-${id}` : undefined">
    <div class="container section">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  id?: string
}>()
</script>

<style>
h1 {
  font-size: var(--size-txt-xl);
  font-style: italic;
  color: var(--clr-accent);

  padding-inline: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    font-size: var(--size-txt-xl);

    margin-block: 2em .5em;
  }
}

.section-wrapper {
  padding-bottom: calc(1rem + 3vw);

  @media screen and (min-width: 768px) {
    width: 75%;
    margin-inline: auto;
  }
}
</style>