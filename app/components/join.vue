<script setup>

</script>

<template>
  <section class="join" id="join">
    <div class="illustration">
      <img
        src="/images/join.jpg"
        srcset="/images/join.jpg 1x, /images/join@2x.jpg 2x"
        alt=""
      >
    </div>
    <div class="copy">
      <h2>How to Join</h2>
      <p>If anyone of this looked interesting, come and join us. The best time to join was five years ago. The second-best time is today. We are not sure about the third-best.</p>

      <a
        class="-button --filled --black"
        href="#"
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
        href="#"
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