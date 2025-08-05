<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

</script>

<template>
  <div class="foundation-item">
    <div>{{ index + 1 }}</div>
    <h4>{{ info.name }}</h4>
    <p>{{ info.description }}</p>
  </div>
</template>

<style scoped lang="scss">

.foundation-item {
  > div {
    font-family: var(--title-font);
    font-size: 48px;
  }

  h4 {
    margin-top: 30px;
    font-weight: 500;
    font-size: 30px;
    color: white;
  }

  p {
    margin-top: 10px;
    font-size: 21px;
    color: #D4D4D4;
  }
}

</style>