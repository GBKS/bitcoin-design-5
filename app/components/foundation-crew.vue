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
      :src="'/images/foundation/' + info.image + '.webp'"
      :alt="info.name"
      loading="lazy"
      width="150"
      height="150"
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
    width: 100px;
    height: 100px;
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

    img {
      width: 60px;
      height: 60px;
    }

    .info {
      h4 {
        font-size: 21px;
      }
    }
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