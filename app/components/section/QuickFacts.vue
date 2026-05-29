<template>
  <section-wrapper id="facts">
    <div>
      <div v-for="{ title, description } in facts" :key="title" class="card">
        <span class="card-title">{{ title }}</span>
        <span class="card-description">{{ description }}</span>
      </div>
    </div>
    <p class="intro">
      I am a full-stack developer from Lübeck in the North of Germany. Currently I am working at a senior position at
      Remind GmbH, where I am deeply involved
      across the entire development stack to create and improve enterprise-level websites and apps.
    </p>

    <div class="cta-wrapper">
      <link-cta to="/work" label="Have a look at my work" />
    </div>
  </section-wrapper>
</template>

<script lang="ts" setup>
const facts = [
  {
    title: "5+",
    description: "years of working as a developer professionally"
  },
  {
    title: "10+",
    description: "core technologies mastered and actively used in production"
  },
  {
    title: "100%",
    description: "automated deployments and containerized environments"
  }
]
</script>

<style scoped>
#facts {
  @media screen and (min-width: 768px) {
    width: 75%;
    margin-inline: auto;
  }

  div:has(>.card) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-inline: 0;
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      padding-inline: 2rem;
      margin-top: 10rem;
    }
  }

  .card {
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 2px solid var(--clr-secondary);
    padding: 1.25rem 1.5rem;

    @media screen and (min-width: 768px) {
      gap: 1rem;
      padding: 1.5rem 2rem;
    }

    @media screen and (min-width: 1024px) {
      padding: 1.5rem 4.5rem;
    }

    .card-title {
      font-size: 1.5rem;

      @media screen and (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .card-description {
      color: var(--clr-secondary);
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