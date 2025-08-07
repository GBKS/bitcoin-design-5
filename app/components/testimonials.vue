<script setup>

import testimonials from '@/data/testimonials.js';

const activeOverlay = ref(null);
const maxVisibleLength = 200;

const openOverlay = (info) => {
  console.log('Opening overlay for:', info);
  if (info.description.length > maxVisibleLength) {
    activeOverlay.value = info;
  }
};

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
        :maxVisibleLength="maxVisibleLength"
        @click="openOverlay(info)"
      />

      <TestimonialOverlay
        v-if="activeOverlay"
        :info="activeOverlay"
        @close="activeOverlay = null"
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
    position: relative;
  }

  @include mixins.media-query(small) {
    .items {
      padding-left: 20px;
      padding-right: 20px;
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