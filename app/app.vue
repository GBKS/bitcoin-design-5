<script setup>

const sections = ref(null);
const activeSection = ref(null);

function nextSection() {
    // console.log('------');

  // Logic to navigate to the next section
  var current = getSectionAtViewportCenter();
  const currentIndex = sections.value.indexOf(current);
    // console.log('activeSection.value:', activeSection.value);
    // console.log('currentIndex:', currentIndex);
  if (currentIndex < sections.value.length - 1) {
    activeSection.value = sections.value[currentIndex + 1];

    // console.log('sections.value:', sections.value);
    // console.log('Navigating to next section:', activeSection.value);

    // Update the hash and scroll to that section
    window.location.hash = activeSection.value;
    const sectionElement = document.getElementById(activeSection.value);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function previousSection() {
  // Logic to navigate to the previous section
  const currentIndex = sections.value.indexOf(activeSection.value);
  if (currentIndex > 0) {
    activeSection.value = sections.value[currentIndex - 1];

    // console.log('Navigating to previous section:', activeSection.value);

    // Scroll to that section
    window.location.hash = activeSection.value;
    const sectionElement = document.getElementById(activeSection.value);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function indexSections() {
  // Store the IDs for all sections
  const sectionElements = document.querySelectorAll('section');
  sections.value = Array.from(sectionElements).map((section) => section.id);
}

function getSectionAtViewportCenter() {
  // Logic to get the section that contains the center line of the viewport
  const sections = document.querySelectorAll('section');
  const viewportCenter = window.innerHeight / 2;

  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.top + rect.height;

    // Check if the viewport center line is within this section's bounds
    if (sectionTop <= viewportCenter && viewportCenter <= sectionBottom) {
      currentSection = section;
    }
  });

  return currentSection ? currentSection.id : null;
}

onMounted(() => {
  indexSections();
  window.addEventListener('scroll', () => {
    activeSection.value = getSectionAtViewportCenter();
  });
})

</script>

<template>
  <!--
  _     _ _            _             _           _
  | |__ (_) |_ ___ ___ (_)_ __     __| | ___  ___(_) __ _ _ __
  | '_ \| | __/ __/ _ \| | '_ \   / _` |/ _ \/ __| |/ _` | '_ \
  | |_) | | || (_| (_) | | | | | | (_| |  __/\__ \ | (_| | | | |
  |_.__/|_|\__\___\___/|_|_| |_|  \__,_|\___||___/_|\__, |_| |_|
                                                    |___/
  -->
  <main>
    <div class="stripe -yellow">
      <Banner />
      <TableOfContents />
      <ReportCard />
      <Stickers />
    </div>
    <Milestones />
    <Projects />
    <div class="stripe -yellow -top-border">
      <Stories />
      <Highlights />
      <Testimonials />
      <Mapper v-if="false" />
      <Map />
    </div>
    <div class="stripe -black">
      <BehindTheScenes />
      <Foundation />
      <Learnings />
      <Roadmap />
    </div>
    <div class="stripe -yellow">
      <Join />
      <Thanks />
      <Footer />
    </div>
    <SectionSkipper
      v-if="sections"
      :activeSection="activeSection"
      :sections="sections"
      @next="nextSection"
      @previous="previousSection"
    />
  </main>
</template>

<style scoped lang="scss">

main {
  display: flex;
  flex-direction: column;

  > .stripe {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.-yellow {
      background-color: var(--yellow);
    }

    &.-black {
      background-color: var(--background-dark);
    }

    &.-top-border {
      border-top: 1px dashed black;
    }
  }
}

</style>