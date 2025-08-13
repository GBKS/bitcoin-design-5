<script setup>

import highlights from '@/data/highlights.js';

</script>

<template>
  <section class="highlights" id="highlights">
    <Separator />
    
    <div class="section-header">
      <h2>Collaboration Highlights</h2>
      <p>Zooming in on some of the unique community efforts that made a big impact.</p>
    </div>

    <div class="items">
      <HighlightItem
        v-for="(info, index) in highlights.data"
        :key="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.highlights {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 15px;
  gap: 50px;
  position: relative;

  .items {
    max-width: 1340px;
    display: flex;
  }

  @include mixins.media-query(small) {
    .items {
      flex-direction: column;
      gap: 50px;
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 80px;

      > * {
        flex-basis: 26%;
        flex-grow: 1;
      }
    }
  }
}

</style>