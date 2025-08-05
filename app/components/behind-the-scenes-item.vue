<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="behind-the-scenes-item">
    <h4>{{ info.name }}</h4>
    <p>{{ info.description }}</p>
  </div>
</template>

<style scoped lang="scss">

.behind-the-scenes-item {
  display: flex;
  flex-direction: column;
  gap: 10px;

  h4 {
    font-size: 21px;
    font-weight: 500;
    color: white;

  }

  p {
    font-size: 19px;
    color: #e9e9e9;
  }
}

</style>