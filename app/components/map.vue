<script setup>

import map from '@/data/map.js';
import countryData from '@/data/country-data.js';

const countryColors = ref(null);
const activeCountry = ref(null);

function updateStats() {
  const populationAdjustedScores = {};
  Object.keys(countryData).forEach(countryCode => {
    const country = countryData[countryCode];
    populationAdjustedScores[countryCode] = country.score / (country.population / 1000000);
  });

  let maxScore = 0;
  Object.keys(countryData).forEach(countryCode => {
    if (populationAdjustedScores[countryCode] > maxScore) {
      maxScore = populationAdjustedScores[countryCode];
    }
  });

  const logScores = {};
  Object.keys(countryData).forEach(countryCode => {
    const country = countryData[countryCode];
    const score = Math.log(country.score + 1);
    logScores[countryCode] = score;
  });

  let maxLogScore = 0;
  Object.keys(logScores).forEach(countryCode => {
    if (logScores[countryCode] > maxLogScore) {
      maxLogScore = logScores[countryCode];
    }
  });

  const colors = {};
  Object.keys(countryData).forEach(countryCode => {
    const score = logScores[countryCode] / maxLogScore;

    // if(countryCode === 'de') {
    //   console.log('DE country.score:', logScores[countryCode]);
    //   console.log('DE maxLogScore:', maxLogScore);
    //   console.log('DE score:', logScores[countryCode] / maxLogScore);
    //   console.log('DE score:', score);
    // }

    colors[countryCode.toUpperCase()] = Math.round(score * 100) / 100;
  });
  countryColors.value = colors;

  // console.log('logScores:', logScores);
  // console.log('logScores DE:', logScores.DE);
  // console.log('maxLogScore:', maxLogScore);
  // console.log('colors DE:', colors.DE);
  // console.log('colors:', colors);
}

function showCountry(countryCode) {
  // console.log('showCountry:', countryCode);
  activeCountry.value = countryCode.toLowerCase();
}

function hideCountry(countryCode) {
  activeCountry.value = null;
}

const countryLabel = computed(() => {
  // let result = 'Relative activity by country';
  let result = null;
  if (activeCountry.value) {
    const country = countryData[activeCountry.value];
    if (country) {
      result = country.name;
    }
  }
  return result;
});

onMounted(() => {
  updateStats();
});

</script>

<template>
  <section class="map" id="map">
    <Separator />

    <div class="section-header">
      <h2>Worldwide Curiosity</h2>
      <p>We don't track who's contributing from where - because privacy matters! But from the breadcrumbs people leave (<a href="https://www.youtube.com/c/BitcoinDesign" target="_blank">views</a>, <a href="https://info.bitcoin.design/share/V7Iv1L3zfTzbfmEp/bitcoin.design" target="_blank">visits</a>, <a href="https://bitcoindesign.substack.com" target="_blank">subscribes</a>, etc.), bitcoin design interest spans every continent.</p>
    </div>

    <div class="content">
      <p :class="'stat' + (activeCountry ? ' -active' : '')">{{ countryLabel }}</p>

      <div class="dot-map" aria-label="World map showing per country activity">
        <template v-if="countryColors">
          <div
            v-for="(dot, index) in map.dots"
            :key="index"
            class="dot"
            :data-id="dot.id"
            :style="{ left: dot.x/map.cols*100 + '%', top: dot.y/map.rows*100 + '%' }"
            @mouseenter="showCountry(dot.id)"
            @mouseleave="hideCountry(dot.id)"
          >
            <div>
              <div :style="{ opacity: countryColors[dot.id] || 0 }" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/animations.scss";

.map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 75px 15px;
  position: relative;
  width: 100%;
  max-width: 1000px;

  .content {
    width: 100%;
    background-color: white;  
    border-radius: 40px;
    aspect-ratio: 2.31;
    padding: 30px 0;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.35);
    position: relative;

    .stat {
      text-align: center;
      color: var(--purple);
      font-size: 24px;
      font-weight: 500;
      pointer-events: none;
      opacity: 0;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      transition: opacity 0.3s ease-in-out;

      &.-active {
        opacity: 1;
      }
    }

    .dot-map {
      width: 100%;
      aspect-ratio: 2.31;
      position: relative;

      .dot {
        position: absolute;
        width: 0.85%;
        aspect-ratio: 1;
        transform: translate(-50%, -50%);
        width: 1.2%;
        height: 2.772%;
        padding: 0.15%;

        > div {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          // opacity: 0;
          position: relative;
          background-color: rgba(black, 0.025);

          > div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: var(--purple);
          }

          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200%;
            height: 200%;
            transform: translate(-50%, -50%) scale(0.5);
            border-radius: 50%;
            border: 2px solid var(--purple);
            pointer-events: none;
            opacity: 0;
            transition: all 150ms animations.$ease
          }
        }

        &:hover {
          > div {
            &:after {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

</style>