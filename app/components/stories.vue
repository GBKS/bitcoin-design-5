<script setup>

import stories from '@/data/stories.js';

</script>

<template>
  <section class="stories" id="stories">
    <div class="section-header">
      <h2>Origin Stories</h2>
      <p>A few stories from designers who decided bitcoin was worth their time.</p>
    </div>

    <div class="items">
      <StoryItem
        v-for="(info, index) in stories.data"
        :key="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.stories {
  max-width: 1340px;
  padding: 75px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .items {
    width: 100%;
    padding-top: 75px;
  }

  @include mixins.media-query(small) {
    .items {
      display: flex;
      flex-direction: column;
      gap: 120px;
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 30px;
      row-gap: 105px;
      padding-top: 75px;
    }
  }
}

</style>