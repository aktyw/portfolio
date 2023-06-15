<script setup lang="ts">
import { gsap } from 'gsap';

const showImage = ref(false);
const target = ref();

const { x: xMouse, elementY: yMouse } = useMouseInElement(target);
const srcImage = ref();

function handleShowImage() {
  showImage.value = true;
  gsap.timeline().to('.image', {
    duration: 0.7,
    x: xMouse.value,
    y: yMouse.value,
    maxHeight: '384px',
    height: '384px',
    opacity: 1,
  });
}

function handleHideImage() {
  showImage.value = false;
  gsap.timeline().to('.image', {
    duration: 0.7,
    x: xMouse.value,
    y: yMouse.value,
    height: 0,
    maxHeight: 0,
    opacity: 0,
  });
}

function handleMoveImage() {
  gsap.to('.image', {
    translateX: xMouse.value,
    translateY: yMouse.value,
    opacity: 1,
  });
}
</script>

<template>
  <section
    id="projects"
    ref="target"
    class="relative col-span-12 flex flex-col w-full"
    @mouseleave="handleHideImage"
    @mouseenter="handleShowImage"
    @mousemove="handleMoveImage"
  >
    <BaseTitle class="project sm:text-center pb-16 opacity-0 z-10">Selected Projects</BaseTitle>
    <ProjectLink @mouseenter="srcImage = '../assets/img/donuts.png'">
      Donuts
      <template #desc> advanced tasks and notes manager </template>
    </ProjectLink>
    <ProjectLink @mouseenter="srcImage = '../assets/img/memorize.png'">
      Memorize
      <template #desc> memory card game </template>
    </ProjectLink>
    <ProjectLink @mouseenter="srcImage = '../assets/img/baryt.png'">
      Restauracja Baryt
      <template #desc> website and full branding for restaurant</template>
    </ProjectLink>
    <ProjectLink @mouseenter="srcImage = '../assets/img/countries.png'">
      Countries Rest API
      <template #desc> frontendmentor challanges </template>
    </ProjectLink>
    <img :src="srcImage" class="image absolute sm:w-80 object-cover rounded-xl opacity-0 pointer-events-none z-10" />
  </section>
</template>
