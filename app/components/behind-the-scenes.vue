<script setup>

import info from '@/data/behind-the-scenes.js';

</script>

<template>
  <section class="behind-the-scenes" id="behind-the-scenes">
    <div class="section-header -white">
      <h2>Behind the Scenes</h2>
      <p>Our approach to building Bitcoin design tools and resources reflects the values we want to see in Bitcoin itself: open, decentralized, and accessible to everyone.</p>
    </div>

    <div class="content">
      <div class="illustration">
        <p>A rough illustration of community dynamics.</p>
        <img
          src="/images/court.png"
          srcset="/images/court.png 1x, /images/court@2x.png 2x"
          alt=""
        >
      </div>

      <div class="items">
        <BehindTheScenesItem
          v-for="(info, index) in info.data"
          :key="index"
          :info="info"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.behind-the-scenes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  max-width: 1340px;

  .content {
    .illustration {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      p {
        font-size: 19px;
        font-weight: 500;
        color: white;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .items {
      max-width: 1200px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }

  @include mixins.media-query(large) {
    .content {
      display: flex;
      flex-direction: row;
      gap: 50px;

      .items {
        flex: 1;
        padding-left: 0;
        padding-right: 0;
      }
    }
  } 
}

</style>