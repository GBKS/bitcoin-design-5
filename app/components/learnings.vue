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

    <p>That’s obviously not all, but would you really want to see another 500 notes here?</p>
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

  > p {
    margin-top: 30px;
    max-width: 600px;
    text-align: center;
    color: #e9e9e9;
    text-wrap: balance;
  }

  @include mixins.media-query(small) {
    padding-left: 25px;
    padding-right: 25px;
    .items {
      
    }
  }

  @include mixins.media-query(medium) {
    padding-left: 25px;
    padding-right: 25px;
    
    .items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @include mixins.media-query(large) {
    .items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
}

</style>