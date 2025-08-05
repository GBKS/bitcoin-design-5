<script setup>

import projects from '@/data/projects.js';

const tags = ref(null);
const selectedTag = ref(null);

function analyzeTags() {
  if (!projects.data || projects.data.length === 0) {
    return;
  }

  const tagCounts = {};

  projects.data.forEach(project => {
    project.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  tags.value = Object.entries(tagCounts).map(([tag, count]) => ({
    tag,
    count
  }));
}

function filter(tag) {
  selectedTag.value = selectedTag.value === tag ? null : tag;
}

const visibleProjects = computed(() => {
  if (!selectedTag.value) {
    return projects.data;
  }
  return projects.data.filter(project => project.tags.includes(selectedTag.value));
});

onMounted(() => {
  analyzeTags();
});

</script>

<template>
  <section class="projects" id="projects">
    <Separator />

    <div class="section-header -yellow">
      <h2>80+ projects touched</h2>
      <p>Where the community made its marks.</p>
    </div>

    <div class="tags">
      <button
        v-for="(tag, index) in tags"
        :key="index"
        :class="tag.tag === selectedTag ? '-active' : ''"
        @click="filter(tag.tag)"
      >
        {{ tag.tag }} ({{ tag.count }})
      </button>
    </div>

    <div class="items">
      <ProjectsItem
        v-for="(info, index) in visibleProjects"
        :key="index"
        :info="info"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px 15px;
  gap: 20px;
  position: relative;

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
    max-width: 900px;

    button {
      background-color: #f5f5f5;
      border: none;
      padding: 4px 10px;
      border-radius: 20px;
      cursor: pointer;
      text-decoration: none;
      color: #7b7b7b;
      font-size: 13px;

      &:hover {
        background-color: #e0e0e0;
      }

      &.-active {
        background-color: var(--yellow);
      }
    }
  }

  .items {
    width: 100%;
    max-width: 1340px;
    display: flex;
    flex-wrap: wrap;
    // gap: 2px;
    // padding: 2px;
    border-right: 2px solid #F2F2F2;
    border-bottom: 2px solid #F2F2F2;
    // background-color: rgba(black, 0.05);
  }
}

</style>