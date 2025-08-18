<script setup>

const props = defineProps({
  info: {
    type: Object,
    required: true
  },
  activeTag: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['selectTag']);

const infoTag = computed(() => {
  return props.info.link ? 'a' : 'div';
});

const sourceSet = computed(() => {
  return props.info.image2x ? '/images/projects/' + props.info.image + ' 1x, /images/projects/' + props.info.image2x + ' 2x' : null;
});

function selectTag(tag) {
  emit('selectTag', tag);
}

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
        :alt="info.name"
        loading="lazy"
        width="80"
        height="80"
      />
      <h4>{{ info.name }}</h4>
    </Component>
    <div class="tags">
      <a
        v-if="info.website"
        :href="info.website"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit website"
      >
        <svg viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.23815 0.255926L8.32019 0.260809C8.72411 0.306483 9.03842 0.646694 9.04382 1.06159L9.11608 6.76276C9.12179 7.21351 8.76111 7.58399 8.31042 7.58991C7.85954 7.59562 7.48898 7.23415 7.48327 6.78327L7.43542 3.01764L1.87683 8.57722C1.55798 8.89606 1.04137 8.89606 0.722529 8.57722C0.40369 8.25837 0.403686 7.74176 0.722529 7.42292L6.28112 1.86335L2.51647 1.81647C2.0656 1.81077 1.70413 1.4402 1.70983 0.989325C1.71576 0.538635 2.08624 0.177955 2.53698 0.183661L8.23815 0.255926Z" fill="currentColor"/>
        </svg>
      </a>
      <button
        v-for="(tag, index) in info.tags"
        :key="index"
        :title="tag === activeTag ? 'Remove tag filter' : 'Click to see projects tagged ' + tag"
        :class="tag === activeTag ? '-active' : ''"
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
  gap: 15px;
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

  &:hover {
    background-color: rgba(black, 0.01);

    .tags {
      a, button {
        background-color: #ededed;
      }
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

      svg {
        width: 10px;
        height: 10px;
      }

      &:hover {
        background-color: #e0e0e0;
      }

      &.-active {
        background-color: var(--yellow);
        color: black;
      }
    }

    a {
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  &:last-child {
    position: relative;
    
    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      right: -2px;
      width: 2px;
      height: 100%;
      background-color: #F2F2F2;  
    }
  }

  @include mixins.media-query(small) {
    flex-basis: 50%;

    .tags {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @include mixins.media-query(medium) {
    flex-basis: 33.33%;
  }

  @include mixins.media-query(large) {
    min-height: 240px;
    flex-basis: 20%;
  }

  @media (prefers-contrast: more) {
    .tags {
      a, button {
        border: 1px solid black;
        box-sizing: border-box;
        background-color: white;
        color: black;

        &:hover {
          background-color: #999;
        }

        &.-active {
          background-color: black;
          color: white;
        }
      }
    }
  }
}

</style>