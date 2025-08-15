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
          target="_blank"
        >
          <h4>Community calls:</h4>
          <p>631</p>
        </a>
        <a
          class="cell"
          href="https://www.bitcoinuikit.com/"
          target="_blank"
        >
          <h4>Figma community file users:</h4>
          <p>15.8k+</p>
        </a>
        <a
          class="cell"
          href="https://bitcoin.design/guide/"
          target="_blank"
        >
          <h4>Bitcoin Design Guide content:</h4>
          <p>95 pages<br/>588 mockups</p>
        </a>
        <a
          class="cell"
          href="https://github.com/BitcoinDesign/Guide/pulls?q=is%3Apr+is%3Aclosed"
          target="_blank"
        >
          <h4>Bitcoin Design Guide activity:</h4>
          <p>3,590 commits<br/>66 contributors</p>
        </a>
        <a
          class="cell"
          href="https://bitcoinicons.com/"
          target="_blank"
        >
          <h4>Bitcoin Icons downloads:</h4>
          <p>45k+</p>
        </a>
        <div
          class="cell"
          href="https://bitcoin.design/social-media/"
          target="_blank"
        >
          <h4>Community reach:</h4>
          <p>8,833</p>
          <div class="socials">
            <a
              href="https://discord.gg/K7aQ5PErht"
              rel="me"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" role="img" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg>
            </a>
            <a
              href="https://bitcoindesign.substack.com/"
              rel="me"
              target="_blank"
            >
              <svg  height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.872182 0H27.1284V3.49418H0.872182V0ZM0.872182 6.78869H27.1284V10.2829H0.872182V6.78869ZM0.822266 13.5275V30L14.0003 22.6123L27.1783 30V13.5275H0.822266Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://x.com/BitcoinDesign"
              rel="me"
              target="_blank"
            >
              <svg viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2334 0.314819H19.3001L12.5668 7.98149L20.4334 18.3815H14.2601L9.42676 12.0615L3.89342 18.3815H0.826758L7.96009 10.1815L0.426758 0.314819H6.75342L11.1201 6.08815L16.2334 0.314819ZM15.1601 16.5815H16.8601L5.86009 2.04815H4.03342L15.1601 16.5815Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://nosta.me/npub13s5mxgws70rpxsug96jfvglggackjrxs2ehypwg0prjaxsek42sqd9l03e"
              rel="me"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42.1 158.8 170"><title>Nostr</title><path fill="currentColor" d="M210.8 199.4c0 3.1-2.5 5.7-5.7 5.7h-68c-3.1 0-5.7-2.5-5.7-5.7v-15.5c.3-19 2.3-37.2 6.5-45.5 2.5-5 6.7-7.7 11.5-9.1 9.1-2.7 24.9-.9 31.7-1.2 0 0 20.4.8 20.4-10.7s-9.1-8.6-9.1-8.6c-10 .3-17.7-.4-22.6-2.4-8.3-3.3-8.6-9.2-8.6-11.2-.4-23.1-34.5-25.9-64.5-20.1-32.8 6.2.4 53.3.4 116.1v8.4c0 3.1-2.6 5.6-5.7 5.6H57.7c-3.1 0-5.7-2.5-5.7-5.7v-144c0-3.1 2.5-5.7 5.7-5.7h31.7c3.1 0 5.7 2.5 5.7 5.7 0 4.7 5.2 7.2 9 4.5 11.4-8.2 26-12.5 42.4-12.5 36.6 0 64.4 21.4 64.4 68.7v83.2ZM150 99.3c0-6.7-5.4-12.1-12.1-12.1s-12.1 5.4-12.1 12.1 5.4 12.1 12.1 12.1S150 106 150 99.3"/></svg>
            </a>
            <a
              href="https://www.youtube.com/c/BitcoinDesign"
              rel="me"
              target="_blank"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a
              href="https://github.com/BitcoinDesign"
              rel="me"
              target="_blank"
            >
              <svg role="img" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/bitcoin-design-foundation"
              rel="me"
              target="_blank"
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
          </div>
        </div>
        <a
          class="cell"
          href="https://www.youtube.com/c/BitcoinDesign"
          target="_blank"
        >
          <h4>YouTube hours watched:</h4>
          <p>3,300</p>
        </a>
        <a
          class="cell"
          href="https://opencollective.com/bitcoin-design-foundation"
          target="_blank"
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
          <path d="M1457 14L1444 1L1431 14L1418 1L1405 14L1392 1L1379 14L1366 1L1353 14L1340 1L1327 14L1314 1L1301 14L1288 1L1275 14L1262 1L1249 14L1236 1L1223 14L1210 1L1197 14L1184 1L1171 14L1158 1L1145 14L1132 1L1119 14L1106 1L1093 14L1080 1L1067 14L1054 1L1041 14L1028 1L1015 14L1002 1L989 14L976 1L963 14L950 1L937 14L924 1L911 14L898 1L885 14L872 1L859 14L846 1L833 14L820 1L807 14L794 1L781 14L768 1L755 14L742 1L729 14L716 1L703 14L690 1L677 14L664 1L651 14L638 1L625 14L612 1L599 14L586 1L573 14L560 1L547 14L534 1L521 14L508 1L495 14L482 1L469 14L456 1L443 14L430 1L417 14L404 1L391 14L378 1L365 14L352 1L339 14L326 1L313 14L300 1L287 14L274 1L261 14L248 1L235 14L222 1L209 14L196 1L183 14L170 1L157 14L144 1L131 14L118 1L105 14L92 1L79 14L66 1L53 14L40 1L27 14L14 1L1 14" stroke-linecap="square" stroke-dasharray="4 4"/>
        </svg>
        <svg viewBox="0 0 405 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1457 14V44H1V14L14 1L27 14L40 1L53 14L66 1L79 14L92 1L105 14L118 1L131 14L144 1L157 14L170 1L183 14L196 1L209 14L222 1L235 14L248 1L261 14L274 1L287 14L300 1L313 14L326 1L339 14L352 1L365 14L378 1L391 14L404 1L417 14L430 1L443 14L456 1L469 14L482 1L495 14L508 1L521 14L534 1L547 14L560 1L573 14L586 1L599 14L612 1L625 14L638 1L651 14L664 1L677 14L690 1L703 14L716 1L729 14L742 1L755 14L768 1L781 14L794 1L807 14L820 1L833 14L846 1L859 14L872 1L885 14L898 1L911 14L924 1L937 14L950 1L963 14L976 1L989 14L1002 1L1015 14L1028 1L1041 14L1054 1L1067 14L1080 1L1093 14L1106 1L1119 14L1132 1L1145 14L1158 1L1171 14L1184 1L1197 14L1210 1L1223 14L1236 1L1249 14L1262 1L1275 14L1288 1L1301 14L1314 1L1327 14L1340 1L1353 14L1366 1L1379 14L1392 1L1405 14L1418 1L1431 14L1444 1L1457 14Z"/>
          <path d="M1457 14L1444 1L1431 14L1418 1L1405 14L1392 1L1379 14L1366 1L1353 14L1340 1L1327 14L1314 1L1301 14L1288 1L1275 14L1262 1L1249 14L1236 1L1223 14L1210 1L1197 14L1184 1L1171 14L1158 1L1145 14L1132 1L1119 14L1106 1L1093 14L1080 1L1067 14L1054 1L1041 14L1028 1L1015 14L1002 1L989 14L976 1L963 14L950 1L937 14L924 1L911 14L898 1L885 14L872 1L859 14L846 1L833 14L820 1L807 14L794 1L781 14L768 1L755 14L742 1L729 14L716 1L703 14L690 1L677 14L664 1L651 14L638 1L625 14L612 1L599 14L586 1L573 14L560 1L547 14L534 1L521 14L508 1L495 14L482 1L469 14L456 1L443 14L430 1L417 14L404 1L391 14L378 1L365 14L352 1L339 14L326 1L313 14L300 1L287 14L274 1L261 14L248 1L235 14L222 1L209 14L196 1L183 14L170 1L157 14L144 1L131 14L118 1L105 14L92 1L79 14L66 1L53 14L40 1L27 14L14 1L1 14" stroke-linecap="square" stroke-dasharray="4 4"/>
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
        text-decoration: none;;

        h4 {
          font-size: 19px;
          font-weight: 400;
          color: black;
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

        .socials {
          margin-top: 15px;
          display: flex;
          gap: 10px;

          a {
            background-color: rgba(var(--purpleRGB), 0.1);
            width: 30px;
            height: 30px;
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--purple);

            svg {
              width: 16px;
              height: 16px;
              color: var(--purple);
            }

            &:hover {
              border: 2px solid var(--purple);
            }
          }
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

          > div {
            color: var(--red);
            stroke: var(--red);
            width: 30px;
            height: 30px;
          }

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
      width: 100%;

      .stats {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        border-top: 1px dashed black;
        border-left: 1px dashed black;
        
        .cell {
          padding: 15px 15px 30px 15px;

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
            border-top: 1px dashed black;
          }

          &:last-child {
            padding-bottom: 60px;
          }
        }
      }

      .separator {
        left: -10px;
        width: calc(100% + 20px);
        aspect-ratio: 9.2045;

        svg {
          &:first-child {
            display: none;
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
          padding: 15px 25px 40px 25px;
          border-top: 1px dashed black;
          border-left: 1px dashed black;

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

      .separator {
        left: -40px;
        width: calc(100% + 80px);
        aspect-ratio: 33.14;

        svg {
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
}

</style>