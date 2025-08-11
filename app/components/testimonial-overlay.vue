<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <dialog class="testimonial-overlay" open>
    <div class="content">
      <button @click="$emit('close')">
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3632 1.2216C15.7537 0.83108 16.3877 0.83108 16.7782 1.2216C17.1685 1.61207 17.1685 2.2452 16.7782 2.63567L10.414 8.99895L16.7782 15.3632C17.1688 15.7537 17.1688 16.3877 16.7782 16.7782C16.3877 17.1688 15.7537 17.1688 15.3632 16.7782L8.99895 10.414L2.63567 16.7782C2.2452 17.1685 1.61207 17.1685 1.2216 16.7782C0.83108 16.3877 0.83108 15.7537 1.2216 15.3632L7.58489 8.99895L1.2216 2.63567C0.83108 2.24514 0.83108 1.61213 1.2216 1.2216C1.61213 0.83108 2.24514 0.83108 2.63567 1.2216L8.99895 7.58489L15.3632 1.2216Z" fill="currentColor"/>
        </svg>
      </button>
      <p v-html="info.description" />
      <h4>{{ info.name }}</h4>
    </div>
  </dialog>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";
@use "@/assets/css/animations.scss";

.testimonial-overlay {
  max-width: 700px;
  background: white;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  padding: 0;
  z-index: 1000;

  .content {
    position: relative;
    padding: 25px;

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

    button {
      position: absolute;
      top: -10px;
      right: -10px;
      background: transparent;
      border: none;
      cursor: pointer;
      width: 40px;
      height: 40px;
      padding: 0;
      appearance: none;
      line-height: 0;
      background-color: black;
      border-radius: 50%;
      color: white;
      transition: transform 0.2s animations.$ease;

      svg {
        width: 16px;
        height: 16px;
        transition: transform 0.2s animations.$ease;
      }

      &:hover {
        transform: scale(0.9);

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }

  @include mixins.media-query(small) {
    
  }

  @include mixins.media-query(medium-up) {
    
  }
}

</style>