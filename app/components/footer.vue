<script setup>

</script>

<template>
  <section class="footer" id="footer">
    <Separator />

    <div class="copy">
      <h2>Get the 10-year report</h2>
      <p>Only 5 years until we’ll publish it. Set a reminder in your calendar to be the first one to hear about it.</p>
      <a
        class="-button --filled --black"
        href="/bitcoin-design-10th-anniversary.ics"
        download="Bitcoin Design 10th Anniversary.ics"
      >Add to calendar</a>
    </div>
    <div class="illustration">
      <picture>
        <source 
          media="(min-width: 768px)" 
          srcset="/images/footer.webp 1x, /images/footer@2x.webp 2x"
        >
        <img 
          src="/images/footer-mobile.webp"
          srcset="/images/footer-mobile.webp 1x, /images/footer-mobile@2x.webp 2x"
          alt="Illustration of a creative workspace with a bright yellow background. A white keyboard sits in the center surrounded by scattered art supplies including colored pencils in a container, paintbrushes, a paint palette, and various small objects. A tablet or device displaying colorful interface elements is visible on the left side. The scene has a playful, artistic atmosphere with small decorative elements scattered throughout."
          loading="lazy"
        />
      </picture>
    </div>

    <a href="https://github.com/GBKS/bitcoin-design-5" target="_blank">View the code</a>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
  position: relative;
  
  .copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-left: 15px;
    padding-right: 15px;

    h2 {
      font-family: var(--title-font);
      font-weight: 400;
      font-size: 56px;
      text-align: center;
      text-wrap: balance;
    }

    p {
      font-size: 24px;
      text-align: center;
      color: #333333;
      max-width: 650px;
      text-wrap: balance;
    }

    a {
      display: inline-block;

      &.-button {
        
      }
    }
  }

  .illustration {
    width: 100%;

    picture {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  > a {
    color: black;
    display: block;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--yellow);
    color: black;
    border-radius: 50px;
    padding: 8px 20px;
    box-sizing: border-box;
  }
}

</style>