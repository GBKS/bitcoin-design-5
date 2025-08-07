<script setup>

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
      background-color: #262626;
    }

    &.-top-border {
      border-top: 1px dashed black;
    }
  }
}

</style>