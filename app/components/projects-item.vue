<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

const infoTag = computed(() => {
  return props.info.link ? 'a' : 'div';
});

const sourceSet = computed(() => {
  return props.info.image2x ? '/images/projects/' + props.info.image + ' 1x, /images/projects/' + props.info.image2x + ' 2x' : null;
});

</script>

<template>
  <div class="projects-item">
    <Component
      class="info"
      :is="infoTag"
      :href="info.link"
      :target="info.link ? '_blank' : null"
      rel="noopener noreferrer"
    >
      <img
      :src="'/images/projects/' + info.image"
      :srcset="sourceSet"
      alt=""
      />
      <h4>{{ info.name }}</h4>
    </Component>
    <div class="tags">
      <a
        v-if="info.website"
        :href="info.website"
        target="_blank"
        rel="noopener noreferrer"
      >Website</a>
      <button
        v-for="(tag, index) in info.tags"
        :key="index"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.projects-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  border-top: 2px solid #F2F2F2;
  border-left: 2px solid #F2F2F2;
  // background-color: white;

  .info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: 35px 15px 0 15px;
    
    img {
      max-width: 100%;
      height: 40px;
      object-fit: contain;
    }

    h4 {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
      color: black;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 0 15px 25px 15px;

    a, button {
      background-color: #f5f5f5;
      border: none;
      padding: 4px 10px;
      border-radius: 20px;
      cursor: pointer;
      text-decoration: none;
      color: #7b7b7b;
      font-size: 13px;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }

  @include mixins.media-query(small) {
    flex-basis: 50%;
  }

  @include mixins.media-query(large) {
    min-height: 240px;
    flex-basis: 20%;
  }
}

</style>