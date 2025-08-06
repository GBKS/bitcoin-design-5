<script setup>

</script>

<template>
  <section class="banner" id="banner">
    <div class="background">
      <picture>
        <source 
          media="(min-width: 768px)" 
          srcset="/images/header-desktop.jpg 1x, /images/header-desktop@2x.jpg 2x"
        >
        <img 
          src="/images/header-mobile.jpg"
          srcset="/images/header-mobile.jpg 1x, /images/header-mobile@2x.jpg 2x"
          alt="Bitcoin Design Banner Background"
        />
      </picture>
    </div>
    <div class="copy">
      <h1>5 years of<br/>Bitcoin Design</h1>
      <h2>Designing Bitcoin For Everyone, With Everyone</h2>
      <p>Five years. Hundreds of calls. Thousands of contributors. One global design community building Bitcoin UX in public.</p>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/animations.scss";
@use "@/assets/css/variables.scss";
@use "@/assets/css/mixins.scss";

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    width: 100%;

    picture {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .copy {
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;

    h1 {
      font-family: var(--title-font);
      font-weight: 400;
      line-height: 0.8;
      text-align: center;
      color: white;
      -webkit-text-stroke: 10px #F1C31C;
      paint-order: stroke fill;
      @include mixins.r('font-size', 51, 77);
    }

    h2 {
      margin-top: 40px;
      font-weight: 500;
      font-size: 30px;
      text-align: center;
    }

    p {
      margin-top: 10px;
      font-size: 21px;
      text-align: center;
    }
  }

  @include mixins.media-query(small) {
    .copy {
      margin-top: -75px;
    }
  }

  @include mixins.media-query(medium-up) {
    .copy {
      margin-top: -100px;
    }
  }
}

</style>