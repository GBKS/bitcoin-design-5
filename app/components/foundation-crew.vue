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
    <h4>{{ info.name }}</h4>
    <p>{{ info.role }}</p>
  </div>
</template>

<style scoped lang="scss">

.foundation-crew {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    margin-top: 20px;
    font-weight: 500;
    font-size: 24px;
    color: white;
  }

  p {
    margin-top: 10px;
    font-size: 21px;
    color: #D4D4D4;
  }
}

</style>