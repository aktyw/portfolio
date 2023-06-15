<script setup lang="ts">
import { gsap, Power1 } from 'gsap';
import { getBreakpoints } from '../../../composables/useBreakpoints';

const srcImage = ref();
const showImage = ref(false);
const target = ref();
const image = ref();

const { elementY: yMouse, elementX, elementWidth } = useMouseInElement(target);
const { elementWidth: imgWidth, elementHeight: imgHeight, elementX: xMouseImg } = useMouseInElement(image);

const distanceFromCenter = computed(() => Math.round(elementX.value - elementWidth.value / 2) / 100);
const power = computed(() => xMouseImg.value - imgWidth.value / 2);

const { smAndSmaller } = getBreakpoints();

function handleShowImage() {
  showImage.value = true;
  gsap.timeline().to('.image', {
    duration: 0.5,
    x: elementX.value - imgWidth.value / 2,
    y: yMouse.value - imgHeight.value / 2,
    maxHeight: smAndSmaller.value ? '300px' : '600px',
    height: smAndSmaller.value ? '300px' : '600px',
    opacity: 1,
  });
}

function handleHideImage() {
  showImage.value = false;
  gsap.timeline().to('.image', {
    duration: 0.5,
    maxHeight: 0,
    height: 0,
  });
}

function handleMoveImage() {
  gsap.to('.image', {
    duration: 1,
    translateX: elementX.value - imgWidth.value / 2,
    translateY: yMouse.value - imgHeight.value / 3,
    opacity: 1,
    rotate: distanceFromCenter.value * 3,
    filter: `brightness(${Math.abs(power.value / 15) + 80}%) sepia(25%)`,
    ease: Power1.easeOut,
  });
}
</script>

<template>
  <section class="relative col-span-12 flex flex-col w-full">
    <BaseTitle
      :class="{ '!opacity-0': showImage }"
      class="project project-title sm:text-center pb-28 opacity-0 z-10 transition"
      >Selected projects</BaseTitle
    >
    <div
      id="projects"
      ref="target"
      @mouseleave="handleHideImage"
      @mouseenter="handleShowImage"
      @mousemove="handleMoveImage"
    >
      <ProjectLink :is-show-image="showImage" @mouseenter="srcImage = '../assets/img/donuts.png'">
        Donuts
        <template #desc> advanced tasks and notes manager </template>
      </ProjectLink>
      <ProjectLink
        :is-show-image="showImage"
        :to="'projects/memorize'"
        @mouseenter="srcImage = '../assets/img/memorize.png'"
      >
        Memorize
        <template #desc> memory card game </template>
      </ProjectLink>
      <ProjectLink :is-show-image="showImage" :to="'projects/baryt'" @mouseenter="srcImage = '../assets/img/baryt.png'">
        Restauracja Baryt
        <template #desc> website and full branding for restaurant</template>
      </ProjectLink>
      <ProjectLink
        :to="'projects/countries'"
        :is-show-image="showImage"
        @mouseenter="srcImage = '../assets/img/countries.png'"
      >
        Countries Rest API
        <template #desc> frontendmentor challanges </template>
      </ProjectLink>
    </div>
    <img
      ref="image"
      :src="srcImage"
      class="image absolute w-64 sm:w-[448px] object-cover rounded-xl opacity-0 pointer-events-none select-none z-10"
    />
  </section>
</template>
