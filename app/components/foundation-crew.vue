<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="foundation-crew">
    <img
      :src="'/images/foundation/' + info.image + '.jpg'"
      :srcset="'/images/foundation/' + info.image + '.jpg 1x, /images/foundation/' + info.image + '@2x.jpg 2x'"
      alt=""
    >
    <div class="info">
      <h4>{{ info.name }}</h4>
      <p>{{ info.role }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.foundation-crew {
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    h4 {
      font-size: 24px;
      font-weight: 400;
      color: white;
    }

    p {
      margin-top: 5px;
      font-size: 19px;
      color: #D4D4D4;
    }
  }

  @include mixins.media-query(small) {
    flex-basis: 40%;
    flex-grow: 1;
    gap: 15px;
  }

  @include mixins.media-query(medium-up) {
    flex-basis: 15%;
    flex-grow: 1;
    flex-direction: column;

    .info {
      margin-top: 20px;
      text-align: center;
    }

  }
}

</style>