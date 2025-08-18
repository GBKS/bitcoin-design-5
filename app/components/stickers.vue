<script setup>

</script>

<template>
  <section class="stickers" id="stickers">
    <div class="section-header">
      <h2>What We Believe</h2>
      <p>What drives our community-first approach.</p>
    </div>
    <div class="items">
      <div class="column-left">
        <div class="sticker -interface">
          <p>Make<br/><strong>bitcoin's<br/>interface</strong><br/>its best advertisement.</p>
        </div>
        <div class="sticker -magic">
          <p>Make magic internet<br/>money feel<br/><strong>magical</strong></p>
        </div>
        <div class="sticker -utxo" v-if="false">
          <p>UX is<br/>the new<br/><strong>UTXO</strong></p>
        </div>
        <div class="sticker -fix">
          <p>Fix the money<br/><strong>Then fix<br/>the UI</strong></p>
        </div>
      </div>
      <div class="column-right">
        <div class="sticker -revolution">
          <p><strong>Pixel-push the<br/>revolution.</strong><br/>Join bitcoin open-source.</p>
        </div>
        <div class="row-two">
          <div class="sticker -hyper">
            <p>
              <span>Hyper</span>
              <br/>
              <strong>Bitcoin</strong>
              <br/>
              <strong>Design</strong>
              <br/>
              <span>ization</span>
            </p>
          </div>
          <div class="sticker -advice">
            <p>Your UI is<br/><strong>financial<br/>advice.</strong></p>
          </div>
        </div>
        <div class="row-three">
          <div class="sticker -looks">
            <p><strong>Bitcoin<br/>doesn't<br/>care how<br/>i looks.</strong><br/>But users do.</p>
          </div>
          <div class="sticker -adoption">
            <p>Adoption is<br/>1% innovation.<br/><strong>99% user<br/>experience.</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.stickers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;

  .items {
    .sticker {
      color: white;
      padding: 10px;

      p {
        text-transform: uppercase;
        font-size: 22px;
        line-height: 0.85;
        font-weight: 300;
        letter-spacing: -0.05rem;

        strong {
          font-size: 40px;
          font-weight: 800;
        }
      }
      
      &.-interface {
        background-color: var(--red);
      }
      
      &.-magic {
        text-align: center;
        background-color: var(--grey);

        p {
          font-size: 25px;
          strong { font-size: 64px; }
        }
      }

      &.-utxo  {
        background-color: var(--purple);

        p {
          font-size: 36px;
          strong { font-size: 65px; }
        }
      }

      &.-fix  {
        background-color: var(--purple);

        p {
          font-size: 30px;
          strong { font-size: 48px; }
        }
      }

      &.-revolution {
        background-color: var(--orange);

        p {
          font-size: 24px;
          strong { font-size: 43px; }
        }
      }

      &.-hyper {
        padding: 15px;
        background-color: var(--brown);

        p {
          text-align: center;

          span { 
            &:nth-of-type(1) {
              font-size: 40px;
            }

            &:nth-of-type(2) {
              font-size: 36px;
            }
          }

          strong { 
            &:nth-of-type(1) {
              font-size: 32px;
              font-weight: 600;
            }

            &:nth-of-type(2) {
              font-size: 34.2px;
              font-weight: 600;
            }
          }
        }
      }

      &.-looks {
        background-color: var(--green);

        p {
          font-size: 22px;
          strong { font-size: 38px; }
        }
      }

      &.-advice {
        background-color: var(--purple);

        p {
          font-size: 30px;
          strong { font-size: 54px; }
        }
      }

      &.-adoption {
        background-color: var(--orange);

        p {
          font-size: 22px;
          strong { font-size: 40px; }
        }
      }
    }
  }

  @include mixins.media-query(small) {
    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      .column-left,
      .column-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .row-two,
        .row-three {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px; 
        }
      }

      .column-left .sticker:nth-child(1) { transform: rotate(-3.21deg); }
      .column-left .sticker:nth-child(2) { transform: rotate(5.73deg); }
      .column-left .sticker:nth-child(3) { transform: rotate(-4.94deg); }
      .column-right .sticker:nth-child(1) { transform: rotate(-6.06deg); }
      .column-right .sticker:nth-child(2) { transform: rotate(-3.16deg); }
      .column-right .sticker:nth-child(3) { transform: rotate(-4.94deg); }
      .column-right .sticker:nth-child(4) { transform: rotate(-6.06deg); }
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

      .column-left,
      .column-right {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .column-left {
        align-items: flex-end;
      }

      .column-right {
        align-items: flex-start;
      }

      .row-two,
      .row-three {
        display: flex;
        align-items: flex-start;
        gap: 10px;
      }
    }
  }
}

</style>