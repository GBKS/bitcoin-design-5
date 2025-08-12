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

</script>

<template>
  <div class="foundation-item">
    <div>
      <div class="shape">
        <svg v-if="index == 0" viewBox="0 0 85 97" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.88875 23.8039L33.3385 5.98936C45.5768 -3.30797 63.1657 -0.0174742 71.2153 13.0753L77.3683 23.0832C89.0441 42.074 85.0557 66.7508 67.9919 81.0965L53.325 93.427C46.7333 98.9688 36.8394 97.8348 31.6724 90.9455L5.40205 55.9184C-2.18623 45.8006 -0.181927 31.4545 9.88875 23.8039Z" fill="white"/>
        </svg>
        <svg v-if="index == 1" width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.02619 55.2013L8.10102 21.0756C11.3131 5.582 27.5036 -3.47411 42.3869 1.89794L49.8345 4.58614C75.6096 13.8896 87.1559 43.8754 74.2768 68.063L64.1269 87.1251C60.4799 93.9742 52.2113 96.9113 45.0609 93.8975L14.6142 81.0646C4.48792 76.7965 -1.20458 65.9614 1.02619 55.2013Z" fill="white"/>
        </svg>
        <svg v-if="index == 2" width="99" height="83" viewBox="0 0 99 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.9648 6.50991L89.8848 26.7651C103.675 38.952 100.786 61.2153 84.3422 69.479L67.8436 77.7702C42.9326 90.2889 12.7488 77.3748 4.60166 50.712L1.57218 40.7976C-0.42186 34.2719 2.23988 27.2226 8.04943 23.6434L39.6698 4.16238C48.2927 -1.15004 59.3757 -0.19684 66.9648 6.50991Z" fill="white"/>
        </svg>
        <svg v-if="index == 3" width="89" height="90" viewBox="0 0 89 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.1764 69.1863L54.6578 84.8138C44.0524 92.1738 29.6529 90.6378 20.8385 81.2064L11.1609 70.8512C-2.78285 55.9312 -2.44113 32.6585 11.9346 18.1544L21.2662 8.73955C32.7372 -2.8339 51.4892 -2.68701 62.7775 9.06473L81.2546 28.3004C92.7632 40.2814 90.8248 59.7146 77.1764 69.1863Z" fill="white"/>
        </svg>
      </div>
      <p>{{ index + 1 }}</p>
    </div>
    <h4>{{ info.name }}</h4>
    <p>{{ info.description }}</p>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.foundation-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > div {
    position: relative;

    .shape {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 160%;
      aspect-ratio: 1;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    p {
      position: relative;
      padding-left: 20px;
      padding-right: 20px;
      font-family: var(--title-font);
      font-size: 48px;
      line-height: 1;
      color: var(--background-dark);
    }
  }

  h4 {
    margin-top: 50px;
    font-weight: 500;
    font-size: 30px;
    color: white;
  }

  > p {
    margin-top: 10px;
    font-size: 21px;
    color: #D4D4D4;
  }

  @include mixins.media-query(small) {
    > div {
      .shape {
        width: 120%;
      }

      p {
        padding-left: 30px;
        padding-left: 30px;
      }
    }
  }
}

</style>