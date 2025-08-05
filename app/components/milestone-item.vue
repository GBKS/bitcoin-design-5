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
  return ['milestone-item -index-' + props.index]
});

</script>

<template>
  <a
    :class="classObject"
    :href="info.link"
    target="_blank"
    rel="noopener noreferrer"
    :data-year="info.date"
  >
    <img
      :src="'/images/milestones/' + info.image + '.jpg'"
      :srcset="'/images/milestones/' + info.image + '.jpg 1x, /images/milestones/' + info.image + '@2x.jpg 2x'"
      alt=""
    >
    <div class="copy">
      <h3>{{ info.name }}</h3>
      <p>{{ info.date }}</p>
    </div>
  </a>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.milestone-item {
  border: 2px solid var(--yellow);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(15px);
  background-color: rgba(white, 0.75);
  max-width: 320px;
  text-decoration: none;
  gap: 10px;

  img {
    border-radius: 5px;
    width: 75px;
    height: 75px;
    object-fit: cover;
  }

  .copy {
    h3 {
      font-size: 19px;
      font-weight: 400;
      color:black;
    }

    p {
      margin-top: 3px;
      font-size: 15px;
      font-style: italic;
      color: #333333;
    }
  }

  @include mixins.media-query(small) {
    width: calc(100vw - 80px);

    &:nth-child(6n+1) { transform: translateX(10px); }
    &:nth-child(6n+2) { transform: translateX(30px); }
    &:nth-child(6n+3) { transform: translateX(10px); }
    &:nth-child(6n+4) { transform: translateX(-10px); }
    &:nth-child(6n+5) { transform: translateX(-30px); }
    &:nth-child(6n+6) { transform: translateX(-10px); }
  }

  @include mixins.media-query(medium-up) {
    &:nth-child(6n+1) { transform: translateX(40px); }
    &:nth-child(6n+2) { transform: translateX(120px); }
    &:nth-child(6n+3) { transform: translateX(40px); }
    &:nth-child(6n+4) { transform: translateX(-40px); }
    &:nth-child(6n+5) { transform: translateX(-120px); }
    &:nth-child(6n+6) { transform: translateX(-40px); }
  }
}

</style>