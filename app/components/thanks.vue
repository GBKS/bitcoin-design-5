<script setup>

</script>

<template>
  <section class="thanks" id="thanks">
    <Separator />

    <div class="sheet">
      <h2>Thank You!</h2>
      <p>Five years ago, a small group of designers believed that bitcoin's success depended on great UX. That simple belief has become a global community of builders, researchers, educators, and advocates.</p>

      <p>Thank you to</p>
      <ul>
        <li>our contributors who've shaped every design review, community call, and guide update.</li>
        <li>our grantees who've turned ideas into real tools that serve real users.</li>
        <li>our partners and countless others who've supported our mission.</li>
        <li>to the projects that've trusted us with design feedback and collaboration.</li>
        <li>every community member who's asked thoughtful questions, shared honest feedback, and helped newcomers find their place.</li>
      </ul>

      <p><b>Bitcoin design is better because of all of you.</b></p>

      <p>The work continues, the community grows, and the mission remains clear: design bitcoin for everyone, with everyone.</p>

      <p>Here's to the next five years of building the future of money, together.</p>

      <p class="-xoxo">xoxo</p>

      <img
        src="/images/community-seal.png"
        width="500"
        height="500"
        alt=""
        loading="lazy"
      >
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.thanks {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px;
  position: relative;

  .sheet {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    position: relative;
    overflow: hidden;

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

    ul {
      li {
        font-size: 21px;
        line-height: 1.6;
        color: #333333;
      }
    }

    p {
      font-size: 21px;
      line-height: 1.6;
      color: #333333;

      &.-xoxo {
        margin-top: 25px;
        font-family: var(--title-font);
        font-weight: 400;
        font-size: 80px;
      }

      & + p {
        margin-top: 20px;
      }
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      opacity: 0.15;
      transform: translate(20%, 30%);
      pointer-events: none;
      width: 200px;
      height: 200px;
    }
  }

  @include mixins.media-query(large) {
    .sheet {
      transform: rotate(-3deg);
    }
  }
}

</style>