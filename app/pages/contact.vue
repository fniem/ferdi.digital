<template>
  <section-wrapper id="contact" title="Let's chat!">
    <h1 class="sr-only">Contact Ferdinand Niemann – Full-Stack Developer in Lübeck</h1>
    <div class="contact-wrapper">
      <div>
        <p>You have an interesting project and need an experienced full-stack developer? Whether you are based in Lübeck, Hamburg, Schleswig-Holstein or anywhere in Germany — I am available for freelance web development, app projects and technical consulting. Reach out via email or the contact form below and I will get back to you as soon as possible.</p>
        <div class="contact-info-wrapper">
          <a href="mailto:moin@ferdi.digital" class="contact-option" aria-label="Send email to moin@ferdi.digital">
            <icon name="mi:email" />
            <span>moin@ferdi.digital</span>
          </a>
          <a href="https://linkedin.com/in/moinferdi" target="_blank" rel="noopener noreferrer" class="contact-option" aria-label="LinkedIn profile of Ferdinand Niemann">
            <icon name="ri:linkedin-fill" />
            <span>linkedin.com/in/moinferdi</span>
          </a>
        </div>
      </div>
      <form @submit.prevent="sendMail">
        <div class="label-wrapper">
          <label for="name">Your name</label>
          <input id="name" v-model="form.name" type="text" name="name" required
            aria-required="true"
            :aria-invalid="!!errorMessage"
            :aria-describedby="errorMessage ? 'form-error' : undefined" />
          <input id="last-name" v-model="form.honeypot" type="text" name="last-name" autocomplete="off" tabindex="-1" aria-hidden="true" />
        </div>
        <div class="label-wrapper">
          <label for="mail">Your email address</label>
          <input id="mail" v-model="form.mail" type="email" name="mail" required
            aria-required="true"
            :aria-invalid="!!errorMessage"
            :aria-describedby="errorMessage ? 'form-error' : undefined" />
        </div>
        <div class="label-wrapper">
          <label for="phone">Your phone number (optional)</label>
          <input id="phone" v-model="form.phone" type="tel" name="phone" />
        </div>
        <div class="label-wrapper">
          <label for="message">Your message</label>
          <textarea id="message" v-model="form.message" name="message" rows="5" required
            aria-required="true"
            :aria-invalid="!!errorMessage"
            :aria-describedby="errorMessage ? 'form-error' : undefined" />
        </div>
        <div class="privacy-wrapper">
          <input id="privacy-check" v-model="form.privacyCheck" type="checkbox" name="privacy-check" required
            aria-required="true" />
          <label for="privacy-check">I agree that my data is stored and processed to answer my request. <nuxt-link
              to="/privacy">
              (See Privacy
              Notice)
            </nuxt-link></label>
        </div>
        <button :disabled="isLoading">{{ isLoading ? 'Sending...' : 'Send' }}</button>
        <FormMessage :message="successMessage" type="success" />
        <FormMessage id="form-error" :message="errorMessage" type="error" />
      </form>
    </div>
  </section-wrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Me – Ferdinand Niemann Full-Stack Developer Lübeck',
})

useSeoMeta({
  title: 'Contact Me – Ferdinand Niemann Full-Stack Developer Lübeck',
  description: 'Hire Ferdinand Niemann, a senior full-stack developer from Lübeck (Germany). Available for freelance web development, Nuxt/Vue projects, and technical consulting. Get in touch via email or contact form.',
  ogTitle: 'Contact Me – Ferdinand Niemann Full-Stack Developer Lübeck',
  ogDescription: 'Hire a senior full-stack developer from Lübeck. Available for freelance web development, Nuxt/Vue projects and technical consulting.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ferdi.digital' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://ferdi.digital/contact' },
            ],
          },
          {
            '@type': 'ContactPage',
            mainEntity: { '@id': 'https://ferdi.digital/#person' },
          },
        ],
      }),
    },
  ],
})

const { form, isLoading, successMessage, errorMessage, sendMail } = useContactForm();
</script>

<style scoped>
#contact {
  .contact-wrapper {
    display: grid;
    gap: 4rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-info-wrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .contact-option {
      background-color: var(--clr-accent);
      color: var(--clr-primary);
      text-decoration: none;
      padding: 1rem;
      display: grid;
      justify-items: center;
      gap: 1rem;

      span:first-of-type {
        font-size: var(--size-txt-l);
      }

      &:hover {
        background-color: white;
      }
    }
  }

  form {
    display: grid;
    gap: 2rem;

    .label-wrapper {
      position: relative;

      label {
        --padding-left: .5rem;
        --border-left: 2px;
        background-color: var(--clr-primary);
        display: inline-block;
        padding: .25rem .75rem;
        border: 2px solid transparent;
        position: absolute;
        left: calc(var(--padding-left) + var(--border-left));
        transform: translateY(-50%);

        &:has(+input:focus),
        &:has(+input:hover),
        &:has(+textarea:focus),
        &:has(+textarea:hover) {
          background-color: white;
          color: var(--clr-primary);
        }
      }

      #name,
      #last-name,
      #mail,
      #phone,
      #message {
        font-size: var(--size-txt-m);
        background-color: var(--clr-accent);
        font-family: inherit;
        padding: 1rem .5rem;
        border: 2px solid transparent;
        width: 100%;

        &:focus {
          outline: unset;
          background-color: white;
        }

        &:hover {
          border-color: white;
        }
      }
    }

    #last-name {
      position: absolute;
      left: -9999px;
      top: -9999px;
    }

    .privacy-wrapper a {
      color: inherit;
    }

    button {
      font-size: inherit;
      font-family: inherit;
      background-color: transparent;
      color: white;
      border: 2px solid var(--clr-accent);
      padding: var(--padding-btn-m);

      &:hover:not(:disabled) {
        background-color: var(--clr-accent);
        color: var(--clr-primary);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
}
</style>
