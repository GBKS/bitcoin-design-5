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
        href="#"
        rel="me"
        target="_blank" 
      >Add to calendar</a>
    </div>
    <div class="illustration">
      <img
        src="/images/footer.png"
        srcset="/images/footer.png 1x, /images/footer@2x.png 2x"
        alt=""
      >
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 15px 0 15px;
  position: relative;
  
  .copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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
        border-radius: 100px;
        padding: 12px 25px;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;

        &.--filled {
          background-color: black;
          color: white;

          &.--black {

          }
        }
      }
    }
  }

  .illustration {
    width: 100%;
    
    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>