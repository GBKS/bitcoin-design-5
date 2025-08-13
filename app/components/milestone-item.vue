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

const formattedDate = computed(() => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // Format the date to a more readable format if needed
  const dateParts = props.info.date.split('/');
  if (dateParts.length === 2) {
    const month = months[parseInt(dateParts[0], 10) - 1];
    const year = dateParts[1];
    return `${month} ${year}`;
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
      v-if="info.image"
      :src="'/images/milestones/' + info.image + '.jpg'"
      alt=""
      loading="lazy"
      width="150"
      height="150"
    >
    <div class="copy">
      <h3>{{ info.name }}</h3>
      <p>{{ formattedDate }}</p>
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
  background-color: rgba(white, 0.5);
  max-width: 320px;
  text-decoration: none;
  gap: 10px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.25);

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

  @media (prefers-contrast: more) {
    border-color: black;
    background-color: white;

    .copy {
      p {
        color: black;
      }
    }
  }
}

</style>