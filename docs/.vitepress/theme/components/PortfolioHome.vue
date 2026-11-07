<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as entries } from '../portfolio.data.js'
import WorkGrid from './WorkGrid.vue'

const { frontmatter: page } = useData()
const research = computed(() => entries.find(item => item.collection === 'research' && item.featured))
</script>

<template>
  <div class="portfolio-home">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow intro-eyebrow">{{ page.eyebrow }}</p>
        <h1 id="intro-title">{{ page.name }}</h1>
        <p class="intro-headline">{{ page.headline }}</p>
        <p class="intro-bio">{{ page.bio }}</p>
        <div class="intro-actions">
          <a class="button button-primary" :href="withBase('/research/')">Explore my research <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" :href="withBase(page.resume)">View résumé <span aria-hidden="true">↓</span></a>
        </div>
        <p class="availability"><span aria-hidden="true"></span>{{ page.availability }}</p>
      </div>
      <figure class="profile-block">
        <div class="profile-image"><img :src="withBase(page.portrait)" :alt="page.portraitAlt" width="500" height="500" fetchpriority="high" /></div>
        <figcaption>
          <strong>{{ page.university }}</strong>
          <a :href="page.labUrl" target="_blank" rel="noopener noreferrer">{{ page.lab }} <span aria-hidden="true">↗</span></a>
        </figcaption>
      </figure>
    </section>

    <section v-if="research" class="home-section" aria-labelledby="research-heading">
      <div class="section-heading"><div><p class="eyebrow">{{ page.researchEyebrow }}</p><h2 id="research-heading">{{ page.researchHeading }}</h2></div><a class="text-link" :href="withBase('/research/')">All research <span aria-hidden="true">↗</span></a></div>
      <article class="research-feature" :class="{ 'research-feature-text-only': !research.image }">
        <div class="research-copy">
          <p class="eyebrow">{{ research.category }}</p>
          <h3><a :href="withBase(research.url)">{{ research.title }}</a></h3>
          <p>{{ research.description }}</p>
          <ul class="tag-list" aria-label="Research topics"><li v-for="tag in research.tags" :key="tag">{{ tag }}</li></ul>
          <a class="research-link" :href="withBase(research.url)">Explore the work <span aria-hidden="true">↗</span></a>
        </div>
        <a v-if="research.image" :href="withBase(research.url)" class="research-image" :aria-label="`Read about ${research.title}`"><img :src="withBase(research.image)" :alt="research.imageAlt" loading="lazy" decoding="async" width="924" height="850" /></a>
      </article>
    </section>

    <section class="home-section" aria-labelledby="projects-heading">
      <div class="section-heading"><div><p class="eyebrow">{{ page.projectsEyebrow }}</p><h2 id="projects-heading">{{ page.projectsHeading }}</h2></div><a class="text-link" :href="withBase('/projects/')">All projects <span aria-hidden="true">↗</span></a></div>
      <WorkGrid collection="projects" featured :limit="3" :heading-level="3" />
    </section>

    <section class="contact-band" aria-labelledby="contact-heading">
      <div><p class="eyebrow">{{ page.contactEyebrow }}</p><h2 id="contact-heading">{{ page.contactHeading }}</h2><p>{{ page.contactText }}</p></div>
      <a class="button button-primary" :href="`mailto:${page.email}`">Get in touch <span aria-hidden="true">↗</span></a>
    </section>
  </div>
</template>
