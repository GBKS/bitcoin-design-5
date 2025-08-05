<script setup>

</script>

<template>
  <section class="thanks" id="thanks">
    <Separator />

    <div class="sheet">
      <h2>Thank You!</h2>
      <p>Five years ago, a small group of designers had a simple belief: Bitcoin's success depends on great user experience. Today, that belief has grown into a global community of builders, researchers, educators, and advocates.</p>

      <p>Thank you to</p>
      <ul>
        <li>our contributors who've shaped every design review, community call, and guide update.</li>
        <li>our grantees who've turned ideas into real tools that serve real users.</li>
        <li>our partners and countless others who've supported our mission.</li>
        <li>to the projects that've trusted us with design feedback and collaboration.</li>
        <li>every community member who's asked thoughtful questions, shared honest feedback, and helped newcomers find their place.</li>
      </ul>

      <p><b>Bitcoin design is better because of all of you.</b></p>

      <p>The work continues, the community grows, and the mission remains clear: design Bitcoin for everyone, with everyone.</p>

      <p>Here's to the next five years of building the future of money, together.</p>

      <p class="-xoxo">xoxo</p>
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
        line-height: 1.4;
        color: #333333;
      }
    }

    p {
      font-size: 21px;
      line-height: 1.4;
      color: #333333;

      &.-xoxo {
        font-family: var(--title-font);
        font-weight: 400;
        font-size: 48px;
      }

      & + p {
        margin-top: 20px;
      }
    }
  }

  @include mixins.media-query(large) {
    .sheet {
      transform: rotate(-3deg);
    }
  }
}

</style>