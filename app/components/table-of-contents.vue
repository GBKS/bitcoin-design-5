<script setup>

import Icons from '@/helpers/icons.js'

</script>

<template>
  <section class="table-of-contents" id="table-of-contents">
    <Separator v-if="false" />
    <details v-if="false" open>
      <summary>Table of Contents<span v-html="Icons.caretDown" /></summary>
      <nav>
        <a href="#report-card">At a Glance</a>
        <a href="#stickers">What we Believe</a>
        <a href="#milestones">Milestones</a>
        <a href="#projects">Projects</a>
        <a href="#stories">Stories</a>
        <a href="#highlights">Highlights</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#map">Map</a>
        <a href="#behind-the-scenes">Behind the Scenes</a>
        <a href="#foundation">Foundation</a>
        <a href="#learnings">Learnings</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#join">Join</a>
        <a href="#thanks">Thanks</a>
      </nav>
    </details>
    <nav>
      <a href="#report-card">At a Glance</a>
      <a href="#stickers">What we Believe</a>
      <a href="#milestones">Milestones</a>
      <a href="#projects">Projects</a>
      <a href="#stories">Stories</a>
      <a href="#highlights">Highlights</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#map">Global Reach</a>
      <a href="#behind-the-scenes">Behind the Scenes</a>
      <a href="#foundation">Foundation</a>
      <a href="#learnings">Learnings</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#join">Join us</a>
      <a href="#thanks">Thank you!</a>
    </nav>
  </section>
</template>

<style scoped lang="scss">

@use "@/assets/css/animations.scss";

.table-of-contents {
  padding: 50px 15px;
  position: relative;

  details {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    summary {
      font-size: 21px;
      font-weight: 500;
      cursor: pointer;
      list-style-type: none;
      border-radius: 20px;
      padding: 7px 20px 5px;

      span {
        vertical-align: middle;
        display: inline-block;
        margin-left: 5px;

        ::v-deep(svg) {
          width: 16px;
          height: 16px;
          color: black;
        }
      }

      &:hover {
        background-color: black;
        color: white;

        span {
          ::v-deep(svg) {
            color: white;
          }
        }
      }
    }

    nav {
      padding: 25px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, auto);
      grid-auto-flow: column;
      gap: 2px;
      
      a {
        display: block;
        text-decoration: none;
        color: black;
        font-weight: 500;
        // transition: all 250ms animations.$ease;
        background-color: rgba(black, 0);
        border-radius: 20px;
        padding: 4px 12px;
        position: relative;

        // &:before {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 0;
        //   height: 100%;
        //   border-radius: 20px;
        //   background-color: rgba(black, 1);
        //   opacity: 0;
        //   transition: all 400ms animations.$ease;
        // }

        &:hover {
          background-color: black;
          color: white;

          &:before {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
  }


    nav {
      width: 100%;
      max-width: 600px;
      padding: 25px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, auto);
      grid-auto-flow: column;
      column-gap: 40px;
      row-gap: 4px;
      
      a {
        display: block;
        text-decoration: none;
        color: black;
        font-weight: 500;
        // transition: all 250ms animations.$ease;
        background-color: rgba(black, 0);
        border-radius: 20px;
        padding: 4px 12px;
        position: relative;

        // &:before {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 0;
        //   height: 100%;
        //   border-radius: 20px;
        //   background-color: rgba(black, 1);
        //   opacity: 0;
        //   transition: all 400ms animations.$ease;
        // }

        &:hover {
          background-color: black;
          color: white;

          &:before {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
}

</style>