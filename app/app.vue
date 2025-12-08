<template>
  <div class="app">
    <page-header />
    <transition name="overlay">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <div v-if="navOpen" class="overlay" @click="navOpen = false"></div>
    </transition>
    <transition name="nav">
      <div v-if="navOpen" class="nav-wrapper" :aria-hidden="!navOpen">
        <main-navigation />
      </div>
    </transition>
    <nuxt-route-announcer />
    <main>
      <div class="max-w">
        <nuxt-page />
      </div>
    </main>
  </div>
</template>

<script setup>
const navOpen = useState('nav')
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  overflow-y: auto;
}

.overlay {
  background-color: var(--clr-blue-900);

  opacity: .75;

  position: fixed;
  inset: 0;
  z-index: 2;
}

.nav-wrapper {
  position: fixed;
  inset: 0;
  margin-left: auto;
  z-index: 3;

  @media screen and (min-width: 1260px) {
    width: 50%;
  }
}

.nav-enter-active,
.nav-leave-active {
  transition: transform 200ms ease-out;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(100%);
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 200ms;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>