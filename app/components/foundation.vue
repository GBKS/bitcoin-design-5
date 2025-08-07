<script setup>

import info from '@/data/foundation.js';

</script>

<template>
  <section class="foundation" id="foundation">
    <Separator color="white" />

    <div class="section-header -yellow -white">
      <h2>The Foundation</h2>
      <p>The Bitcoin Design Foundation exists to sustain and amplify community efforts.</p>
    </div>

      <a
        class="-button --filled --yellow"
        href="https://bitcoindesignfoundation.org/"
        rel="me"
        target="_blank" 
      >Visit the website</a>

    <div class="items">
      <FoundationItem
        v-for="(info, index) in info.data"
        :key="index"
        :index="index"
        :info="info"
      />
    </div>

    <h3>Administrators and board members</h3>

    <div class="crew">
      <FoundationCrew
        v-for="(info, index) in info.crew"
        :key="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.foundation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  position: relative;

  .items {
    max-width: 1340px;
    width: 100%;
    display: flex;
    gap: 40px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: white;
  }

  .crew {
    max-width: 1100px;
    width: 100%;
    display: flex;
    gap: 40px;
  }

  @include mixins.media-query(small) {
    .items {
      flex-direction: column;
    }

    .crew {
      // flex-direction: column;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  @include mixins.media-query(medium-up) {
    
  }
}

</style>