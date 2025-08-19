<script setup>

</script>

<template>
  <section class="roadmap" id="roadmap">
    <Separator color="white" />

    <div class="section-header -yellow -white">
      <h2>What's next</h2>
      <p>Bitcoin is 15 years old and has made amazing strides. And yet there is still so much to do.</p>
    </div>

    <div class="content">
      <div class="road -mobile">
        <svg viewBox="0 0 70 1549" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.3723 1532C35.3723 1390.47 1.65106 1367.79 15.2178 1274.35C28.7846 1180.91 55 1113.77 55 1021.24C55 928.701 15.9256 887.876 15.9256 769.938C15.9256 652 54.8182 639.299 54.8178 516.825C54.8174 394.351 15.9256 371.67 15.9256 266.433C15.9256 161.196 35.0971 157.567 35.0971 36" stroke="#FA7D39" stroke-width="5" stroke-dasharray="10 10"/>
          <path d="M50 1517L21 1546" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
          <path d="M21 1517C26.9758 1524.03 42.8232 1539.26 50 1546" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="1278" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="55" cy="1027" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="15" cy="776" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="55" cy="525" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="15" cy="274" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="35" cy="19.2617" r="16" stroke="#FA7D39" stroke-width="5"/>
        </svg>
      </div>

      <div class="wrap">
        <p>Here and now</p>

        <div class="items">
          <div class="road -desktop">
            <svg viewBox="0 0 317 875" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M176.5 842.941L147.5 871.941" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
              <path d="M147.5 842.941C153.476 849.972 169.323 865.204 176.5 871.941" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
              <path d="M160.838 857.662C187.867 722.91 79.1058 736.91 30.1949 681.91C-3.05206 644.524 165.501 580.07 168.501 508.57C171.501 437.07 128.5 333.07 51.5007 371.57C-25.4986 410.07 28.3148 501.57 98.0006 508.57C167.686 515.57 284.001 394.57 299.001 268.07C314.001 141.57 160.838 117.783 160.838 38.6621" stroke="#FA7D39" stroke-width="5" stroke-dasharray="10 10"/>
              <circle cx="157.126" cy="18.9102" r="16" stroke="#FA7D39" stroke-width="5"/>
              <circle cx="302.25" cy="246.512" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
              <circle cx="242.25" cy="142.512" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
              <circle cx="15.25" cy="435.512" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
              <circle cx="243.25" cy="405.512" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
              <circle cx="45.25" cy="695.512" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
            </svg>
          </div>  

          <div class="item">
            <h4>Growing our global community</h4>
            <p>We need designers from every corner of the world shaping bitcoin's future. Different cultures, different needs, different solutions.</p>
          </div>

          <div class="item">
            <h4>Making research a shared resource</h4>
            <p>Imagine if every bitcoin project could tap into user insights without starting from zero. We're building the tools to make that happen.</p>
          </div>

          <div class="item">
            <h4>Creating harmony between apps</h4>
            <p>Different bitcoin apps use different words for the same things. Different flows for the same actions. Users shouldn't need a PhD to send money. We're working on shared patterns that let bitcoin apps play nicely together.</p>
          </div>

          <div class="item">
            <h4>Next generation of builders</h4>
            <p>Bitcoin needs people who understand great UX and how bitcoin actually works. We're working on initiatives to educate and create that rare breed.</p>
          </div>

          <div class="item">
            <h4>Making bitcoin design a sustainable career choice</h4>
            <p>The best designers can't survive on passion alone. We're creating funding paths so people can focus on bitcoin full-time, not just after their day jobs.</p>
          </div>

        </div>
        
        <p>Everyone uses bitcoin</p>
        <img
          src="/images/bitty-coder.png"
          width="200"
          height="113"
          alt="Bitty the coder"
          loading="lazy"
        >
      </div>
    </div>
    
    <p>The next five years will build on everything we've learned, guided by the same principle that started this community: <span>design bitcoin for everyone, with everyone.</span></p>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.roadmap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  position: relative;

  .content {
    width: 100%;
    max-width: 1140px;

    .wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      > p {
        color: white;
        font-family: var(--scribble-font);
        font-size: 33px;

        &:nth-of-type(2) {
          & + img {
            margin-top: 10px;
          }
        }
      }
    
      .items {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // gap: -50px;
        // border: 1px solid red;
        position: relative;

        .item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 400px;

          h4 {
            font-size: 24px;
            font-weight: 500;
            color: white;
            text-wrap: balance;
          }

          p {
            font-size: 21px;
            color: #e9e9e9;
            text-wrap: balance;
          }
        }
      }
    }
  }

  > p {
    max-width: 800px;
    color: #e9e9e9;
    text-align: center;
    font-size: 24px;
    text-wrap: balance;

    span {
      color: var(--yellow);
    }
  }

  @include mixins.media-query(medium-down) {
    .content {
      display: flex;
      gap: 15px;

      > .road {
        position: relative;
        aspect-ratio: 0.04519;
        width: 80px;

        svg {
          position: absolute;
          height: 100%;
          width: auto;
        }
      }

      .wrap {
        gap: 15px;

        > p {
          width: 100%;
        }

        img {
          align-self: flex-start;
        }

        .items {
          flex-grow: 1;
          justify-content: space-between;

          .road {
            display: none;
          }

          .item {
            h4 {
              font-size: 21px;
            }

            p {
              font-size: 17px;
            }
          }
        }
      }
    }
  }

  @include mixins.media-query(medium) {
    padding-left: 30px;
    padding-right: 30px;
    
    .content {
      .wrap {
        .items {
          width: auto;
          max-width: none;

          .item {
            max-width: none;
          }
        }
      }
    }
  }

  @include mixins.media-query(large) {
    .content {
      > .road {
        display: none;
      }

      .wrap {
        > p {
          text-align: center;
        }

        .road {
          position: absolute;
          top: 0px;
          left: 50%;
          height: 100%;
          transform: translateX(-50%);

          svg {
            height: 100%;
            width: auto;
          }
        }

        .items {
          padding-left: 15px;
          padding-right: 15px;

          .item {
            &:nth-child(2) {
              margin-top: 60px;
              transform: translateX(-60%);
            }

            &:nth-child(3) {
              margin-top: -30px;
              transform: translateX(105%);
            }

            &:nth-child(4) {
              transform: translateX(-100%);
            }

            &:nth-child(5) {
              margin-top: -40px;
              transform: translateX(70%);
            }

            &:nth-child(6) {
              margin-top: 40px;
              padding-bottom: 30px;
              transform: translateX(-90%);
            }
          }
        }
      }
    }
  }
}

</style>