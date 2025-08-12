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
  return ['learning-item', '-index-'+props.index];
});

</script>

<template>
  <div :class="classObject">
    <p class="-word">{{ info.word }}</p>
    <h4>{{ info.name }}</h4>
    <p class="-description">{{ info.description }}</p>
  </div>
</template>

<style scoped lang="scss">

.learning-item {
  padding: 20px;
  background-color: var(--yellow);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);

  p.-word {
    font-size: 54px;
    line-height: 1;
    transform: rotate(-4deg);
    text-decoration: line-through;
    color: white;
    font-family: var(--scribble-font);
    letter-spacing: -0.05rem;
  }

  h4 {
    margin-top: 30px;
    font-size: 18px;
    font-weight: 500;
    color: white;
  }

  p.-description {
    margin-top: 10px;
    font-size: 18px;
    color: white;
  }

  &.-index-0 { 
    transform: rotate(-3.21deg);

    p.-word {
      color: var(--orange);
    }

    h4,
    p.-description {
      color: var(--brown);
    }
  }
  &.-index-1 { background-color: var(--green); transform: rotate(5.73deg); }
  &.-index-2 { background-color: var(--orange); transform: rotate(-4.94deg); }
  &.-index-3 { background-color: var(--grey); transform: rotate(-6.06deg); }
  &.-index-4 { background-color: var(--purple); transform: rotate(-3.16deg); }
  &.-index-5 { background-color: var(--brown); transform: rotate(3.61deg); }
}

</style>