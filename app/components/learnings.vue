<script setup>

import learnings from '@/data/learnings.js';

</script>

<template>
  <section class="learnings" id="learnings">
    <Separator color="white" />
    
    <div class="section-header -yellow -white">
      <h2>What We've Learned</h2>
      <p>Insights gathered from five years of collaborative bitcoin design.</p>
    </div>

    <div class="items">
      <LearningItem
        v-for="(info, index) in learnings.data"
        :key="index"
        :index="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.learnings {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  position: relative;

  .items {
    max-width: 960px;
    width: 100%;
    gap: 0px;
  }

  @include mixins.media-query(small) {
    padding-left: 25px;
    padding-right: 25px;
    .items {
      
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
}

</style>