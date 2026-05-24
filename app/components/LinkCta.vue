<template>
  <a v-if="isId || isExternal" :class="{ outline: props.type === 'outline' }" :href="to">
    {{ label }}
    <icon v-if="iconName" :name="iconName" />
  </a>
  <nuxt-link v-else :class="{ outline: props.type === 'outline' }" :to="to">
    {{ label }}
    <icon v-if="iconName" :name="iconName" />
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  to: string
  type?: "outline"
  iconName?: string
}>()

const isId = computed(() => props.to.startsWith("#"))
const isExternal = computed(() => props.to.startsWith("http"))
</script>

<style scoped>
a {
  background-color: var(--clr-accent);
  text-decoration: none;
  color: var(--clr-primary);
  padding: var(--padding-btn-l);
  border: 2px solid var(--clr-accent);
  font-size: var(--size-txt-sm);
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: var(--size-regular);
  }

  &:hover {
    background-color: transparent;
    color: var(--clr-accent);
  }

  &.outline {
    background-color: transparent;
    color: var(--clr-accent);

    &:hover {
      background-color: var(--clr-accent);
      color: var(--clr-primary);
    }
  }
}
</style>