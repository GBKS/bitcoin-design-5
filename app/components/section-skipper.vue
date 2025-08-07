<script setup>

import Icons from '@/helpers/icons.js'

const props = defineProps({
  sections: {
    type: Array,
    default: () => []
  },
  activeSection: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['next', 'previous']);

function next() {
  emit('next');
}

function previous() {
  emit('previous');
}

const isFirst = computed(() => {
  return props.sections.length > 0 && props.activeSection === props.sections[0];
});

const isLast = computed(() => {
  return props.sections.length > 0 && props.activeSection === props.sections[props.sections.length - 1];
});

</script>

<template>
  <div class="section-skipper">
    <button
      @click="previous"
      :disabled="isFirst"
      v-html="Icons.caretUp"
    />
    <button
      @click="next"
      :disabled="isLast"
      v-html="Icons.caretDown"
    />
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.section-skipper {
  position: fixed;
  backdrop-filter: blur(15px);
  background-color: rgba(white, 0.75);
  border-radius: 100%;
  bottom: calc(env(safe-area-inset-bottom) + 20px);
  left: 20px;
  // transform: translateX(-50%);
  border-radius: 100px;
  display: flex;
  gap: 0;
  padding: 3px 8px;
  background-color: var(--yellow);
  box-shadow: 0 10px 30px -15px rgba(black, 0.75);

  button {
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: black;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    ::v-deep(svg) {
      width: 20px;
      height: 20px;
    }

    &:not(:disabled):hover {
      cursor: pointer;
      // background-color: red;
    }
  }

  @include mixins.media-query(small) {
    
  }

  @include mixins.media-query(large) {
    
  } 
}

</style>