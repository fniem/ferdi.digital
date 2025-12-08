<template>
  <div>
    <nav :class="{ 'nav-open': navOpen }" role="navigation">
      <ul>
        <li v-for="(link, index) in links" :key="link" @mouseenter="handleMouseEnter($event, index)"
          @mouseleave="handleMouseLeave($event, index)">
          <nuxt-link :to="link.to" @click="navOpen = false">
            <span :ref="el => linkBackgrounds[index] = el" class="link-background" />
            <span class="link-text">{{ link.label }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nav class="legal">
      <ul>
        <li>
          <nuxt-link to="/legal" @click="navOpen = false">
            Legal Information / Impressum
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacy" @click="navOpen = false">
            Privacy Notice / Datenschutzerklärung
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navOpen = useState('nav')

const links = [
  { to: '/', label: 'Home & Intro' },
  { to: '/work', label: "Work" },
  { to: '/skills', label: 'Skills & Stack' },
  { to: '/contact', label: 'Contact Me' }
]

const linkBackgrounds = ref([])

const handleMouseEnter = (event, index) => {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const mouseY = event.clientY - rect.top
  const fromTop = mouseY < rect.height / 2

  const background = linkBackgrounds.value[index]
  if (background) {
    background.style.transformOrigin = fromTop ? 'top' : 'bottom'
    background.style.transform = 'scaleY(1)'
  }
}

const handleMouseLeave = (event, index) => {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const mouseY = event.clientY - rect.top
  const fromTop = mouseY < rect.height / 2

  const background = linkBackgrounds.value[index]
  if (background) {
    background.style.transformOrigin = fromTop ? 'top' : 'bottom'
    background.style.transform = 'scaleY(0)'
  }
}
</script>

<style scoped>
div {
  background-color: var(--clr-blue-300);
  color: var(--clr-blue-900);

  padding-inline: 2em;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr auto;
}

.nav-open {
  height: inherit;

  ul {

    font-size: var(--size-txt-xl);
    font-weight: 700;
    padding-block: 8rem 2em;

    text-align: center;

    @media screen and (min-width: 1260px) {
      text-align: left;

      padding-block: 2em;
    }

    li {
      position: relative;
      cursor: pointer;
    }

    li+li {
      margin-top: 2rem;
    }

    a {
      text-decoration: none;
      color: inherit;
      position: relative;
      display: inline-block;
      padding-block: .25rem;
      width: 100%;

      @media screen and (min-width: 768px) {
        padding: 0.25em .75em;
      }

      &[aria-current="page"] {
        font-style: italic;
      }
    }

    .link-background {
      position: absolute;
      inset: 0;
      background-color: white;
      transform: scaleY(0);
      transition: transform 0.3s ease;
      z-index: 0;
    }

    .link-text {
      position: relative;
      z-index: 1;
    }
  }
}

.legal {
  padding-block: var(--padding-container);

  ul {
    display: flex;
    justify-content: end;
    gap: 2rem;

    a {
      color: inherit;
      font-size: var(--size-txt-sm);

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>