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
    <a
      v-if="info.story"
      :href="info.story"
      target="_blank"
      rel="noopener noreferrer"
    >Read more</a>
    <p class="-journey" v-if="info.journey">The Journey: {{ info.journey }}</p>
    <p class="-impact" v-if="info.impact">Impact: {{ info.impact }}</p>
    <div class="follow">
      <a
        v-if="info.linkedin"
        :href="info.linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_287_1441)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.72222 20.3481H18.2778C19.5051 20.3481 20.5 19.3532 20.5 18.1259V2.57037C20.5 1.34307 19.5051 0.348145 18.2778 0.348145H2.72222C1.49492 0.348145 0.5 1.34307 0.5 2.57037V18.1259C0.5 19.3532 1.49492 20.3481 2.72222 20.3481Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7228 17.5703H14.7549V12.5153C14.7549 11.1294 14.2283 10.3549 13.1313 10.3549C11.9379 10.3549 11.3145 11.1609 11.3145 12.5153V17.5703H8.45425V7.94067H11.3145V9.23778C11.3145 9.23778 12.1744 7.64647 14.2179 7.64647C16.2605 7.64647 17.7228 8.89376 17.7228 11.4734V17.5703ZM5.04203 6.67975C4.06778 6.67975 3.27832 5.88409 3.27832 4.9028C3.27832 3.92151 4.06778 3.12585 5.04203 3.12585C6.01628 3.12585 6.80527 3.92151 6.80527 4.9028C6.80527 5.88409 6.01628 6.67975 5.04203 6.67975ZM3.56514 17.5703H6.5476V7.94067H3.56514V17.5703Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_287_1441">
              <rect width="20" height="20" fill="white" transform="translate(0.5 0.348145)"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a
        v-if="info.twitter"
        :href="info.twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.2334 0.314819H19.3001L12.5668 7.98149L20.4334 18.3815H14.2601L9.42676 12.0615L3.89342 18.3815H0.826758L7.96009 10.1815L0.426758 0.314819H6.75342L11.1201 6.08815L16.2334 0.314819ZM15.1601 16.5815H16.8601L5.86009 2.04815H4.03342L15.1601 16.5815Z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.story-item {
  border: 2px solid rgba(white, 0.5);
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

  > a {
    display: inline-block;
    margin-top: 10px;
    color: black;
    font-size: 19px;

    &:hover {
      color: var(--purple);
    }
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

  .follow {
    position: absolute;
    top: 30px;
    right: 30px;

    a {
      width: 40px;
      height: 40px;
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      border-radius: 100px;
      background-color: rgba(white, 0.25);
      transition: background-color 100ms ease-in-out;

      svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        background-color: white;
      }
    }
  }

  @include mixins.media-query(small) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

</style>