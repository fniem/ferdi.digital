<template>
  <section-wrapper id="facts" title="Quick Intro">
    <p class="intro">
      I am a full-stack developer, currently working at a senior position at Remind GmbH, where I am deeply involved
      across the entire development stack (frontend, backend, DevOps).
    </p>
    <p>
      Before transitioning into tech, I spent eight years working in retail. But even during that time, programming
      was more than just a hobby; it was something I always came back to, whether building small projects or exploring
      new technologies. Eventually, I decided to turn that passion into a career, and I haven't looked back since.
    </p>
    <p>
      Today, I have the honor to contribute to a wide range of projects, from lightweight websites for small
      businesses to
      enterprise-grade web applications used by large, multi-million euro companies.
    </p>
    <div class="cta-wrapper">
      <link-cta to="/work" label="Have a look at my work" />
    </div>
  </section-wrapper>
</template>

<style scoped>
#facts {
  @media screen and (min-width: 768px) {
    width: 75%;
    margin-inline: auto;
  }

  h3 {
    @media screen and (min-width: 768px) {
      font-size: var(--size-txt-xl);
      font-style: italic;
      color: var(--clr-blue-300);

      margin-bottom: 1em;
    }
  }

  p {
    line-height: 1.8;
    margin-block: 2rem;
    max-width: 45em;

    &.intro {
      font-size: var(--size-txt-l);
      font-weight: 700;
      line-height: 1.4;
    }
  }
}
</style>