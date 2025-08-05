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

const classObject = computed(() => {
  return ['testimonial-item', '-index-'+props.index];
});

</script>

<template>
  <div :class="classObject">
    <p>{{ info.description }}</p>
    <h4>{{ info.name }}</h4>
  </div>
</template>

<style scoped lang="scss">

.testimonial-item {
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 30px;
    width: 30px;
    height: 30px;
    border-bottom-right-radius: 5px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    transform: rotate(45deg);
    background: white;
    z-index: -1;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 19px;
    line-height: 1.6;
  }

  h4 {
    margin-top: 10px;
    font-family: var(--scribble-font);
    font-size: 24px;
  }

  &.-index-0 { transform: rotate(-4deg); }
  &.-index-1 { transform: rotate(5.21deg); }
  &.-index-2 { transform: rotate(5.7deg); }
  &.-index-3 { transform: rotate(6.2deg); }
  &.-index-4 { transform: rotate(-3.38deg); }
  &.-index-5 { transform: rotate(5.35deg); }
}

</style>