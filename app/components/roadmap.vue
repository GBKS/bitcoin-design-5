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
        <svg width="70" height="1345" viewBox="0 0 70 1345" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.3723 1330.04C35.3723 1207.62 1.65106 1188 15.2178 1107.18C28.7846 1026.35 55 968.28 55 888.239C55 808.198 15.9256 772.885 15.9256 670.872C15.9256 568.859 54.8182 557.873 54.8178 451.936C54.8174 345.999 15.9256 326.381 15.9256 235.354C15.9256 144.326 35.0971 141.187 35.0971 36.0352" stroke="#FA7D39" stroke-width="5" stroke-dasharray="10 10"/>
          <path d="M50 1313.04L21 1342.04" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
          <path d="M21 1313.04C26.9758 1320.07 42.8232 1335.3 50 1342.04" stroke="#FA7D39" stroke-width="5" stroke-linecap="round"/>
          <circle cx="15" cy="1108.04" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="55" cy="891.035" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="15" cy="674.035" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="55" cy="457.035" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
          <circle cx="15" cy="240.035" r="12" fill="#262626" stroke="#FA7D39" stroke-width="5"/>
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
            <h4>Growing Our Global Community</h4>
            <p>We need more designers from around the world shaping bitcoin's future.</p>
          </div>

          <div class="item">
            <h4>Making Research Everyone's Superpower</h4>
            <p>We're building shared research tools so any bitcoin project can make smart design decisions without expensive studies.</p>
          </div>

          <div class="item">
            <h4>Creating Design That Works Together</h4>
            <p>We're building shared design patterns and tools so users can easily move between different bitcoin apps instead of relearning everything.</p>
          </div>

          <div class="item">
            <h4>Teaching the Next Generation</h4>
            <p>Bitcoin needs designers who understand both good UX and how bitcoin works—we're training them through courses and mentorship.</p>
          </div>

          <div class="item">
            <h4>Building Something That Lasts</h4>
            <p>We're developing sustainable funding and career paths so talented designers can focus on bitcoin full-time, not just nights and weekends.</p>
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
    
    <p>The next five years will build on everything we've learned, guided by the same principle that started this community: design bitcoin for everyone, with everyone.</p>
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
  }

  @include mixins.media-query(medium-down) {
    .content {
      display: flex;
      gap: 15px;

      > .road {
        position: relative;
        aspect-ratio: 0.05204;
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
              transform: translateX(100%);
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
              transform: translateX(-100%);
            }
          }
        }
      }
    }
  }
}

</style>