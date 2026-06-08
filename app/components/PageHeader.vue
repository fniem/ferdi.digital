<template>
  <header class="max-w">
    <span>
      <nuxt-link to="/">
        Ferdinand Niemann
      </nuxt-link>
    </span>
    <div class="buttons-wrapper">
      <a href="https://github.com/moinferdi" target="_blank" rel="noopener noreferrer" class="btn social" :class="{ 'social-toggled': navOpen }" aria-label="GitHub profile">
        <span aria-hidden="true">
          <icon name="ri:github-line" />
        </span>
      </a>
      <a href="https://linkedin.com/in/moinferdi" target="_blank" rel="noopener noreferrer" class="btn social"
        :class="{ 'social-toggled': navOpen }" aria-label="LinkedIn profile">
        <span aria-hidden="true">
          <icon name="ri:linkedin-line" />
        </span>
      </a>
      <button class="btn" @click="navOpen = !navOpen"
        :aria-expanded="navOpen ? 'true' : 'false'"
        aria-controls="main-navigation"
        :aria-label="navOpen ? 'Close menu' : 'Open menu'">
        <span :class="{ toggled: navOpen }" aria-hidden="true">

          <icon name="mi:arrow-left" />
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
const navOpen = useState('nav', () => false);
</script>

<style scoped>
header {
  padding: var(--padding-container);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  isolation: isolate;
  z-index: 4;

  span:has(a) {
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    z-index: 3;

    a {
      color: white;
      text-decoration: none;
    }

    @media screen and (min-width: 768px) {
      letter-spacing: .25rem;
    }
  }

  .buttons-wrapper {
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    z-index: 4;

    @media screen and (min-width: 768px) {
      gap: 2rem;
    }

    .btn {
      font-size: var(--size-txt-l);
      background-color: var(--clr-accent);
      color: var(--clr-primary);

      width: 3.25rem;
      aspect-ratio: 1;

      display: flex;


      border: 2px solid transparent;

      &.social {
        background-color: transparent;
        border-color: var(--clr-accent);

        color: white;

        &:hover {
          border-color: white;
        }

        &.social-toggled {
          color: var(--clr-primary);
        }
      }


      &:not(.outline):hover {
        background-color: white;
        color: var(--clr-primary);
      }

      >span {
        transition: transform 200ms;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.toggled {
          transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
          transition: none;
        }
      }

    }

  }
}
</style>
