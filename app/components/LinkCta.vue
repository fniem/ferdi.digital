<template>
  <a v-if="isId || isExternal" :class="{ outline: props.type === 'outline' }" :href="to">{{ label }}</a>
  <nuxt-link v-else :class="{ outline: props.type === 'outline' }" :to="to">{{ label }}</nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  to: string
  type?: "outline"
}>()

const isId = computed(() => props.to.startsWith("#"))
const isExternal = computed(() => props.to.startsWith("http"))
</script>

<style scoped>
a {
  background-color: var(--clr-blue-300);
  text-decoration: none;
  color: var(--clr-blue-900);
  padding: var(--padding-btn-l);
  border: 2px solid var(--clr-blue-300);
  font-size: var(--size-txt-sm);

  @media screen and (min-width: 768px) {
    font-size: var(--size-regular);
  }

  &:hover {
    background-color: transparent;
    color: var(--clr-blue-300);
  }

  &.outline {
    background-color: transparent;
    color: var(--clr-blue-300);

    &:hover {
      background-color: var(--clr-blue-300);
      color: var(--clr-blue-900);
    }
  }
}
</style>