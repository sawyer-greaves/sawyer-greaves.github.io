<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as entries } from '../portfolio.data.js'

const props = defineProps({
  collection: { type: String, default: 'projects' },
  featured: { type: Boolean, default: false },
  limit: { type: Number, default: 0 },
  headingLevel: { type: Number, default: 2 }
})
const items = computed(() => {
  const filtered = entries.filter(item => item.collection === props.collection && (!props.featured || item.featured))
  return props.limit ? filtered.slice(0, props.limit) : filtered
})
</script>

<template>
  <div class="work-grid">
    <article v-for="item in items" :key="item.url" class="work-card">
      <a :href="withBase(item.url)" class="work-card-link">
        <div v-if="item.image" class="work-card-image"><img :src="withBase(item.image)" :alt="item.imageAlt" loading="lazy" decoding="async" width="600" height="450" /></div>
        <div class="work-card-copy">
          <p class="eyebrow">{{ item.category }}</p>
          <component :is="`h${headingLevel}`">{{ item.title }} <span aria-hidden="true">↗</span></component>
          <p class="work-description">{{ item.description }}</p>
          <ul class="tag-list" aria-label="Topics"><li v-for="tag in item.tags.slice(0, 3)" :key="tag">{{ tag }}</li></ul>
        </div>
      </a>
    </article>
  </div>
</template>
