<script setup>

import Icons from '@/helpers/icons.js'

</script>

<template>
  <section class="report-card" id="report-card">
    <Separator />

    <div class="section-header">
      <h2>At a Glance</h2>
      <p>This isn't just another tech community. This is proof-of-work.</p>
    </div>
    <div class="content">
      <div class="stats">
        <div class="cell -header">
          <h3>Report card</h3>
          <div v-html="Icons.bPlus" />
          <h4>Name:</h4>
          <p>Bitcoin Design Community</p>
        </div>
        <a
          class="cell"
          href="#projects"
        >
          <h4>Projects improved:</h4>
          <p>80+</p>
        </a>
        <a
          class="cell"
          href="https://github.com/BitcoinDesign/Meta/issues?q=is%3Aissue%20state%3Aclosed%20label%3Acall"
        >
          <h4>Community calls:</h4>
          <p>631</p>
        </a>
        <a
          class="cell"
          href="https://www.bitcoinuikit.com/"
        >
          <h4>Figma community file users:</h4>
          <p>15.8k+</p>
        </a>
        <a
          class="cell"
          href="https://bitcoin.design/guide/"
        >
          <h4>Bitcoin Design Guide content:</h4>
          <p>95 pages<br/>588 mockups</p>
        </a>
        <a
          class="cell"
          href="https://github.com/BitcoinDesign/Guide/pulls?q=is%3Apr+is%3Aclosed"
        >
          <h4>Bitcoin Design Guide activity:</h4>
          <p>3,590 commits<br/>66 contributors</p>
        </a>
        <a
          class="cell"
          href="https://bitcoinicons.com/"
        >
          <h4>Bitcoin Icons downloads:</h4>
          <p>45k+</p>
        </a>
        <a
          class="cell"
          href="https://bitcoin.design/social-media/"
        >
          <h4>Community reach:</h4>
          <p>8,833</p>
        </a>
        <a
          class="cell"
          href="https://www.youtube.com/c/BitcoinDesign"
        >
          <h4>YouTube views:</h4>
          <p>31,500</p>
        </a>
        <a
          class="cell"
          href="https://opencollective.com/bitcoin-design-foundation"
        >
          <h4>Foundation donations received:</h4>
          <p>€481k+</p>
        </a>
      </div>
      <div class="edge -top-left-h" />
      <div class="edge -top-left-v" />
      <div class="edge -top-right-h" />
      <div class="edge -top-right-v" />
      <div class="separator">
        <svg viewBox="0 0 1458 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1457 14V44H1V14L14 1L27 14L40 1L53 14L66 1L79 14L92 1L105 14L118 1L131 14L144 1L157 14L170 1L183 14L196 1L209 14L222 1L235 14L248 1L261 14L274 1L287 14L300 1L313 14L326 1L339 14L352 1L365 14L378 1L391 14L404 1L417 14L430 1L443 14L456 1L469 14L482 1L495 14L508 1L521 14L534 1L547 14L560 1L573 14L586 1L599 14L612 1L625 14L638 1L651 14L664 1L677 14L690 1L703 14L716 1L729 14L742 1L755 14L768 1L781 14L794 1L807 14L820 1L833 14L846 1L859 14L872 1L885 14L898 1L911 14L924 1L937 14L950 1L963 14L976 1L989 14L1002 1L1015 14L1028 1L1041 14L1054 1L1067 14L1080 1L1093 14L1106 1L1119 14L1132 1L1145 14L1158 1L1171 14L1184 1L1197 14L1210 1L1223 14L1236 1L1249 14L1262 1L1275 14L1288 1L1301 14L1314 1L1327 14L1340 1L1353 14L1366 1L1379 14L1392 1L1405 14L1418 1L1431 14L1444 1L1457 14Z"/>
          <path d="M1457 14L1444 1L1431 14L1418 1L1405 14L1392 1L1379 14L1366 1L1353 14L1340 1L1327 14L1314 1L1301 14L1288 1L1275 14L1262 1L1249 14L1236 1L1223 14L1210 1L1197 14L1184 1L1171 14L1158 1L1145 14L1132 1L1119 14L1106 1L1093 14L1080 1L1067 14L1054 1L1041 14L1028 1L1015 14L1002 1L989 14L976 1L963 14L950 1L937 14L924 1L911 14L898 1L885 14L872 1L859 14L846 1L833 14L820 1L807 14L794 1L781 14L768 1L755 14L742 1L729 14L716 1L703 14L690 1L677 14L664 1L651 14L638 1L625 14L612 1L599 14L586 1L573 14L560 1L547 14L534 1L521 14L508 1L495 14L482 1L469 14L456 1L443 14L430 1L417 14L404 1L391 14L378 1L365 14L352 1L339 14L326 1L313 14L300 1L287 14L274 1L261 14L248 1L235 14L222 1L209 14L196 1L183 14L170 1L157 14L144 1L131 14L118 1L105 14L92 1L79 14L66 1L53 14L40 1L27 14L14 1L1 14" stroke-linecap="square" stroke-dasharray="8 12"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.report-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  position: relative;
  // border-top: 1px dashed black;

  .content {
    position: relative;

    .stats {
      background-color: white;
      width: 100%;
      max-width: 1040px;
      border-right: 1px dashed black;

      .cell {
        padding: 15px 25px 40px 25px;;
        border-top: 1px dashed black;
        border-left: 1px dashed black;
        text-decoration: none;;

        h4 {
          font-size: 19px;
          font-weight: 400;
          color: black;
        }

        > div {
          color: var(--red);
          stroke: var(--red);
          width: 30px;
          height: 30px;
        }

        p {
          margin-top: 10px;
          font-family: var(--scribble-font);
          font-size: 44px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.05rem;
          color: var(--blue);
        }

        &:is(a) {
          &:hover {
            background-color: rgba(var(--yellowRGB), 0.1);
            // text-decoration: underline;
            color: var(--blue);
          }
        }

        &.-header {
          padding-top: 25px;
          padding-bottom: 25px;

          h3 {
            font-size: 24px;
            font-weight: 500;
          }

          p {
            margin-top: 0;
            font-size: 30px;
          }
        }
      }
    }

    .edge {
      position: absolute;


      &.-top-left-h,
      &.-top-right-h {
        top: 0;
        width: 20px;
        height: 1px;
        border-top: 1px dashed black;
      }

      &.-top-left-h { left: -20px; }
      &.-top-right-h { right: -20px; }

      &.-top-left-v,
      &.-top-right-v {
        top: -20px;
        width: 1px;
        height: 20px;
        border-left: 1px dashed black;
      }

      &.-top-left-v { left: 0; }
      &.-top-right-v { right: 0; }
    }

    .separator {
      position: absolute;
      bottom: -10px;
      left: -40px;
      width: calc(100% + 80px);
      aspect-ratio: 33.14;
      z-index: 100;
      line-height: 0;

      svg {
        width: 100%;
        height: auto;

        path {
          &:nth-child(1) {
            fill: var(--yellow);
          }

          &:nth-child(2) {
            stroke: black;
          }
        }
      }
    }
  }

  @include mixins.media-query(small) {
    .content {
      .stats {
        .cell {
          &.-header {
            position: relative;

            :nth-child(2) {
              position: absolute;
              top: 30px;
              right: 30px;
            }

            h4 {
              margin-top: 20px;
            }
          }

          &:not(.-header) {
            
          }
        }
      }
    }
  }

  @include mixins.media-query(large) {
    .content {
      .stats {
        // A 3 column grid where the first item spans 3 columns
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, auto);

        :first-child {
          grid-column: 1 / -1;
        }

        .cell {
          &.-header {
            display: flex;
            align-items: center;
            gap: 15px;

            :nth-child(2) {
              margin-right: auto;
            }
          }

          &:not(.-header) {
            min-height: 180px;
          }
        }
      }
    }
  }
}

</style>