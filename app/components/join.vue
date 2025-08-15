<script setup>

</script>

<template>
  <section class="join" id="join">
    <div class="illustration">
      <img
        src="/images/join-2.webp"
        srcset="/images/join-2.webp 1x, /images/join-2@2x.webp 2x"
        alt="Whimsical illustration of a large yellow doorway or portal with black and white striped steps leading up to it. The doorway opens to a starry night sky filled with white dots resembling stars or snow. The bright yellow background surrounds a garden-like scene with colorful flowers, plants, and small floating icons representing various digital elements like chat bubbles, cameras, and interface symbols. The overall style is playful and dreamlike, suggesting a transition between the digital world and a magical or cosmic space."
        loading="lazy"
        width="740"
        height="521"
      >
    </div>
    <div class="copy">
      <h2>Join Us</h2>
      <p>If designing for bitcoin interests you, come and join us. The best time to join was five years ago. The second-best time is today. We’re not sure about the third-best.</p>

      <a
        class="-button --filled --black"
        href="https://discord.gg/K7aQ5PErht"
        rel="me"
        target="_blank" 
      >Chat on Discord</a>

      <p>Some things to do:</p>
      <ol>
        <li>Join Discord Discussions</li>
        <li>Explore the Bitcoin Design Guide</li>
        <li>Jump on a Community Call</li>
        <li>Contribute to a Design Review</li>
        <li>Attend an event</li>
        <li>Apply for a Grant</li>
      </ol>

      <a
        class="-button --outline --black"
        href="https://bitcoin.design/join/"
        rel="me"
        target="_blank" 
      >More info</a>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.join {
  max-width: 1340px;
  padding: 75px 15px;

  .illustration {
    img {
      width: 100%;
      height: auto;
    }
  }

  .copy {
    // display: flex;
    // flex-direction: column;

    h2 {
      font-family: var(--title-font);
      font-weight: 400;

      @include mixins.rs(
          ('font-size', 56, 72)
      );

      & + p {
        margin-top: 20px;
      }
    }

    p {
      font-size: 21px;
      text-wrap: balance;
    }

    ol {
      margin-top: 10px;
      
      li {
        font-size: 21px;
        line-height: 1.4;
      }
    }

    a {
      margin-top: 40px;
      display: inline-block;

      &.-button {
        border-radius: 100px;
        padding: 12px 25px;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;

        &.--outline {
          border: 2px solid black;
          color: black;

          &.--black {
            border-color: black;
          }
        }

        &.--filled {
          background-color: black;
          color: white;

          &.--black {

          }
        }
      }

      & + p {
        margin-top: 40px;
      }
    }
  }

  @include mixins.media-query(large) {
    display: flex;
    gap: 0;
    align-items: center;

    .illustration {
      flex-basis: 60%;
    }

    .copy {
      flex-basis: 40%;
    }
  }
}

</style>