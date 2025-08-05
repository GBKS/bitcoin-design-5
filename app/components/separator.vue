<script setup>

const props = defineProps({
  color: {
    type: String,
    default: 'black'
  }
});

const classObject = computed(() => {
  return {
    separator: true,
    [`-${props.color}`]: true
  };
});

</script>

<template>
  <div :class="classObject">
    <div class="separator-inner" />
  </div>
</template>

<style scoped lang="scss">

.separator {
  width: 100%;
  max-width: 500px;
  height: 1px;
  border-top: 1px dashed black;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .separator-inner {
    width: 100%;
    height: 100%;
    position: relative;

    &:before,
    &:after {
      display: block;
      content: '';
      position: absolute;
      top: -10px;
      width: 1px;
      height: 20px;
      border-left: 1px dashed black;
    }

    &:before { left: 10px; }
    &:after { right: 10px; }
  }

  &.-white {
    border-color: white;

    .separator-inner {
      &:before,
      &:after {
        border-color: white;
      }
    }
  }
}

</style>