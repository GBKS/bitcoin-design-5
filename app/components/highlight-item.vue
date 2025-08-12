<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="highlight-item">
    <img
      :src="'/images/highlights/' + info.image + '.webp'"
      :srcset="'/images/highlights/' + info.image + '.webp 1x, /images/highlights/' + info.image + '@2x.webp 2x'"
      alt=""
      loading="lazy"
    />
    <h4>{{ info.name }}</h4>
    <p>{{ info.type }}</p>
    <p v-html="info.description" />

    <a
      v-if="info.link"
      class="-button -small --filled --black"
      :href="info.link"
      target="_blank"
    >Learn more</a>
  </div>
</template>

<style scoped lang="scss">

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 100%;
    height: auto;
    border-radius: 25px;
    box-shadow: 0 15px 30px -20px rgba(0, 0, 0, 0.35);
  }

  h4 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
  }

  p {
    &:nth-of-type(1) {
      margin-top: 5px;
      font-size: 21px;
      font-style: italic;
      font-weight: 300;
    }

    &:nth-of-type(2) {
      margin-top: 20px;
      font-size: 19px;
    }

    ::v-deep(a) {
      color: black;
      text-decoration: underline;

      &:hover {
        color: var(--purple);
      }
    }
  }

  a {
    margin-top: 20px;
  }
}

</style>