<script setup>

const props = defineProps(['number']);

const number0 = ref(null);
const number1 = ref(null);
const number2 = ref(null);
const number3 = ref(null);
const number4 = ref(null);
const number5 = ref(null);

const activeNumber = computed(() => {
  let result = number0.value;

  switch(props.number) {
    case 0:
      result = number0.value;
      break;
    case 1:
      result = number1.value;
      break;
    case 2:
      result = number2.value;
      break;
    case 3:
      result = number3.value;
      break;
    case 4:
      result = number4.value;
      break;
    case 5:
      result = number5.value;
      break;
  }

  return result;
});

const styleObject = computed(() => {
  const s = {}

  if(activeNumber.value) {
    s.width = number0.value.offsetWidth + 'px'
    s.height = activeNumber.value.offsetHeight + 'px'
  }

  return s
});

const listStyle = computed(() => {
  const s = {}

  if(activeNumber.value) {
    s.transform = 'translateY(-' + activeNumber.value.offsetTop + 'px)'
  }

  return s
});

</script>

<template>
  <div class="milestone-year">
    <div class="first">20</div>
    <div class="second">
      2
      <div class="dynamic" :style="styleObject">
        <div class="list" :style="listStyle">
          <div ref="number0">0</div>
          <div ref="number1">1</div>
          <div ref="number2">2</div>
          <div ref="number3">3</div>
          <div ref="number4">4</div>
          <div ref="number5">5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.milestone-year {
  // width: 100%;
  // height: 100vh;
  font-family: var(--title-font);
  color: var(--yellow);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  .second {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dynamic {
    overflow: hidden;
    transition: all 350ms animations.$ease;

    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      transition: all 350ms animations.$ease;

      > div {

      }
    }
  }

  @include mixins.media-query(small) {
    flex-direction: column;
    font-size: 300px;
    line-height: 1;

    .second {
      margin-top: -20px;
    }
  }

  @include mixins.media-query(medium) {
    font-size: 250px;
    line-height: 1;
  }

  @include mixins.media-query(large) {
    font-size: 400px;
    line-height: 1;
  }

  @media (prefers-contrast: more) {
    color: black;
  }
}

</style>