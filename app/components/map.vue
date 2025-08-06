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
  let result = 'Relative activity by country';
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
      <h2>Global Reach</h2>
      <p>We respect privacy, so we are not sure where everyone in the community is from. But here’s some data we gathered from Substack, YouTube and Umami analytics.</p>
    </div>

    <div class="content">
      <p class="stat">{{ countryLabel }}</p>
      
      <div class="dot-map">
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
            <div 
              :style="{ opacity: countryColors[dot.id] }"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

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

    .stat {
      text-align: center;
      color: var(--purple);
      font-size: 17px;
      font-weight: 500;
    }

    .dot-map {
      margin-top: 15px;
      width: 100%;
      aspect-ratio: 2.31;
      position: relative;
      // background-color: rgba(255, 0, 0, 0.1);

      .dot {
        position: absolute;
        width: 0.85%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: rgba(black, 0.1);
        transform: translate(-50%, -50%);

        div {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: var(--purple);
          opacity: 0;
        }

        // &[data-id="CA"] {
        //   width: 5%;
        //   border: 2px solid white;
        //   z-index: 10;
        // }
      }
    }
  }
}

</style>