<script setup>

import milestones from '@/data/milestones.js';

const activeYear = ref(null);
const items = ref(null);
const yearDisplay = ref(null);
let stickyOffset = 0;
const yearDisplayTop = ref(0);
let ticking = false;

function updateYearFromCenterMilestone() {
  const milestones = document.querySelectorAll('.milestone-item');
  const viewportCenter = window.innerHeight / 2;
  let closestMilestone = null;
  let closestDistance = Infinity;

  milestones.forEach(milestone => {
    const rect = milestone.getBoundingClientRect();
    const milestoneCenter = rect.top + (rect.height / 2);
    const distanceFromCenter = Math.abs(milestoneCenter - viewportCenter);
    
    if (distanceFromCenter < closestDistance) {
      closestDistance = distanceFromCenter;
      closestMilestone = milestone;
    }
  });

  if (closestMilestone) {
    const year = closestMilestone.dataset.year; // e.g., "2021"
    const lastDigit = parseInt(year.slice(-1)); // Gets "1" from "2021"

    activeYear.value = lastDigit
  }
}

function updatePosition() {
  const containerRect = items.value.getBoundingClientRect();
  const yearDisplayRect = yearDisplay.value.getBoundingClientRect();
  const scrollY = window.pageYOffset;
  
  // Calculate the sticky position
  let targetTop;

  // console.log('---');
  // console.log('containerRect.top:', containerRect.top);
  // console.log('containerRect.bottom:', containerRect.bottom);
  // console.log('stickyOffset:', stickyOffset);
  // console.log('window.innerHeight:', window.innerHeight);
  
  // if (containerRect.top <= stickyOffset && containerRect.bottom >= stickyOffset) {
  if (containerRect.top < 0 && containerRect.bottom >= stickyOffset*2) {
    // Container is in the sticky zone - position relative to viewport
    targetTop = stickyOffset - containerRect.top - yearDisplayRect.height / 2;
    // console.log('In sticky zone');
  } else if (containerRect.top > 0) {
    // Container hasn't reached sticky position yet - stick to top of container
    // console.log('Container before sticky zone');
    targetTop = 0;
  } else {
    // Container has scrolled past - stick to bottom of container
    targetTop = containerRect.height - yearDisplay.value.offsetHeight;
    // console.log('Container after sticky zone');
  }

  // console.log('Top', targetTop);

  // Clamp within container bounds
  let targetTopAdjusted = Math.max(0, Math.min(targetTop, containerRect.height - yearDisplay.value.offsetHeight));
  
  console.log('Top', targetTop, targetTopAdjusted);

  yearDisplayTop.value = targetTop;
  // yearDisplay.style.top = `${targetTop}px`;
}

onMounted(() => {
  activeYear.value = 0;
  stickyOffset = window.innerHeight / 2;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updatePosition();
        updateYearFromCenterMilestone();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    stickyOffset = window.innerHeight / 2;
    updatePosition();
  });
});

</script>

<template>
  <section class="milestones" id="milestones">
    <div class="section-header -yellow">
      <h2>Milestones</h2>
      <p>How we've grown together, year by year.</p>
    </div>

    <div class="items" ref="items">
      <div
        class="year-display" 
        ref="yearDisplay"
        :style="{ top: yearDisplayTop + 'px' }"
      >
        <MilestoneYear
          :number="activeYear"
          :top="yearDisplayTop"
        />
      </div>
      <MilestoneItem
        v-for="(milestone, index) in milestones.data"
        :key="index"
        :index="index"
        :info="milestone"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/mixins.scss";

.milestones {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 75px 0;
  border-top: 1px dashed black;

  .items {
    width: 100%;
    max-width: 1340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    overflow: hidden;

    .year-display {
      position: absolute;
      // top: 50%;
      left: 50%;
      height: 100vh;
      transform: translateX(-50%);
      // transform: translate(-50%, -50%);
      // background-color: rgba(255, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
  }

  @include mixins.media-query(small) {
    
  }

  @include mixins.media-query(medium-up) {
    
  }
}

</style>