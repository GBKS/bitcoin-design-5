<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  maxVisibleLength: {
    type: Number,
    default: 100
  }
});

const classObject = computed(() => {
  const c = ['testimonial-item', '-index-'+props.index];

  if(isShortened.value) {
    c.push('-shortened');
  }

  return c;
});

const description = computed(() => {
  return isShortened.value
    ? props.info.description.slice(0, props.maxVisibleLength) + '...'
    : props.info.description;
});

const isShortened = computed(() => {
  return props.info.description.length > props.maxVisibleLength;
});

</script>

<template>
  <div :class="classObject">
    <p v-if="isShortened">{{ description }} <span>more</span></p>
    <p v-if="!isShortened">{{ description }}</p>
    <h4 v-if="info.link">
      <a :href="info.link" target="_blank" rel="noopener noreferrer">{{ info.name }}</a>
    </h4>
    <h4 v-if="!info.link">{{ info.name }}</h4>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/animations.scss";

.testimonial-item {
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0 15px 30px -20px rgba(0, 0, 0, 0.35);
  position: relative;
  transition: all 200ms animations.$ease;

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

    span {
      text-decoration: underline;
      color: var(--purple);
    }
  }

  h4 {
    margin-top: 10px;
    font-family: var(--scribble-font);
    font-size: 24px;

    a {
      color: var(--purple);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &.-shortened {
    cursor: pointer;

    &:hover {
      box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
    }
  }

  &.-index-0 { transform: rotate(-4deg); }
  &.-index-1 { transform: rotate(5.21deg); }
  &.-index-2 { transform: rotate(5.7deg); }
  &.-index-3 { transform: rotate(6.2deg); }
  &.-index-4 { transform: rotate(-3.38deg); }
  &.-index-5 { transform: rotate(5.35deg); }
}

</style>