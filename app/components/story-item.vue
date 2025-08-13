<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="story-item">
    <img
      :src="'/images/stories/' + info.image + '.jpg'"
      width="150"
      height="150"
      alt=""
      loading="lazy"
    />
    <h4>{{ info.name }}</h4>
    <p class="-role">{{ info.role }}</p>
    <p class="-description" v-html="`&quot;${info.description}&quot;`" />
    <p class="-journey" v-if="info.journey">The Journey: {{ info.journey }}</p>
    <p class="-impact" v-if="info.impact">Impact: {{ info.impact }}</p>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.story-item {
  border: 2px solid rgba(black, 0.2);
  padding: 100px 40px 40px 40px;
  border-radius: 40px;
  position: relative;

  img {
    display: block;
    position: absolute;
    top: -75px;
    left: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  h4 {
    font-family: var(--title-font);
    font-weight: 400;
    font-size: 64px;
  }

  p {
    &.-role {
      margin-top: 5px;
      font-size: 21px;
    }

    &.-description {
      margin-top: 30px;
      font-size: 19px;
      font-style: italic;
    }

    &.-journey {
      margin-top: 30px;
      font-size: 15px;
      font-style: italic;
    }

    &.-impact {
      margin-top: 10px;
      font-size: 15px;
      font-style: italic;
    }
  }

  @include mixins.media-query(small) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

</style>