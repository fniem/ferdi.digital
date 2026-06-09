<template>
  <div id="home">
    <div class="hero-wrapper">
      <div class="hero container">
        <nuxt-img src="/images/profile.jpg" format="webp" loading="eager" preload fetchpriority="high"
          sizes="xs:90vw sm:80vw md:400px lg:600px xl:1000px" alt="Portrait of Ferdinand Niemann" />
        <h1>Moin! I am Ferdi from Lübeck and <span class="vim-pro">I exit vim like a pro</span></h1>
        <div class="cta-wrapper">
          <link-cta to="#facts" label="Find out more" icon-name="ri:arrow-down-line" />
          <link-cta to="/contact" label="Get in touch" type="outline" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 1);
  pointer-events: none;
  transition: opacity 0.1s ease-out;
  z-index: 10;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 75%;
    aspect-ratio: 1;
    object-fit: cover;
    margin-top: 4rem;

    @media screen and (min-width: 768px) {
      width: 50%;
    }

    @media screen and (min-width: 1024px) {
      width: 33%;
    }
  }

  h1 {
    font-size: var(--size-txt-xl);
    text-align: center;
    margin-block: 2.5rem;
    font-style: normal;
    color: white;

    @media screen and (max-width: 767px) {
      margin-top: -34vw;
    }

    @media screen and (min-width: 768px) {
      margin-inline: auto;
      width: 60%;
      margin-top: -8rem;
    }

    @media screen and (min-width: 1024px) {
      margin-top: -12rem;
    }

    .vim-pro {
      color: var(--clr-accent);
      font-family: cursive;
    }
  }

  .cta-wrapper {
    display: flex;
    gap: 2rem;

    @media screen and (min-width: 768px) {
      margin-top: 3rem;
    }
  }
}
</style>
