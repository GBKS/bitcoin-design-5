<script setup>

import testimonials from '@/data/testimonials.js';

</script>

<template>
  <section class="testimonials" id="testimonials">
    <Separator />

    <div class="section-header">
      <h2>Testimonials</h2>
      <p>They say many things about the community. Here are some of the flattering ones.</p>
    </div>
    
    <div class="items">
      <TestimonialItem
        v-for="(info, index) in testimonials.data"
        :key="index"
        :index="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 15px;
  gap: 50px;
  position: relative;

  .items {
    width: 100%;
    max-width: 1340px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 40px;
  }

  @include mixins.media-query(small) {
    .items {
      
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      > * {
        flex-basis: 26%;
        flex-grow: 1;
      }
    }
  }
}

</style>