<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

const currentImage = ref(0);

const galleryStyle = computed(() => {
  return {
    transform: `translateX(${currentImage.value * -100}%)`
  }
});

function nextImage() {
  const nextIndex = (currentImage.value + 1) % props.info.images.length;
  currentImage.value = nextIndex;
}

</script>

<template>
  <div class="highlight-item">
    <img
      v-if="info.image"
      :src="'/images/highlights/' + info.image + '.webp'"
      :srcset="'/images/highlights/' + info.image + '.webp 1x, /images/highlights/' + info.image + '@2x.webp 2x'"
      alt=""
      loading="lazy"
    />
    <div
      v-if="info.images"
      class="gallery"
    >
      <button
        class="wrap"
        :style="galleryStyle"
        aria-label="View next image in gallery"
        @click="nextImage"
      >
        <img
          v-for="(image, index) in info.images"
          :key="index"
          :src="'/images/highlights/' + image + '.webp'"
          :srcset="'/images/highlights/' + image + '.webp 1x, /images/highlights/' + image + '@2x.webp 2x'"
          alt=""
          loading="lazy"
        />
      </button>
      <div class="dots">
        <button
          v-for="(image, index) in info.images"
          :key="index"
          class="dot"
          :class="{ '-active': index === currentImage }"
          :title="'View image ' + (index + 1)"
          :aria-selected="index === currentImage"
          @click="currentImage = index"
        />
      </div>
    </div>
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

@use "@/assets/css/animations.scss";

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > img {
    width: 100%;
    height: auto;
    border-radius: 25px;
    box-shadow: 0 15px 30px -20px rgba(0, 0, 0, 0.35);
  }

  .gallery {
    width: 100%;
    aspect-ratio: 1.5686;
    border-radius: 25px;
    box-shadow: 0 15px 30px -20px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    position: relative;

    .wrap {
      display: flex;
      transition: transform 400ms animations.$ease;
      appearance: none;
      border-width: 0;
      padding: 0;
      background: transparent;
      cursor: pointer;
      height: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 5px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--purple);
        opacity: 0.5;
        appearance: none;
        border-width: 0;
        padding: 0;
        cursor: pointer;

        &.-active {
          opacity: 1;
        }
      }
    }
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