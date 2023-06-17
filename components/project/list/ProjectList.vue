<script setup lang="ts">
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBreakpoints } from '../../../composables/useBreakpoints';

const srcImage = ref();
const showImage = ref(false);
const target = ref();
const image = ref();

const { elementY: yMouse, elementX, elementWidth } = useMouseInElement(target);
const { elementWidth: imgWidth, elementHeight: imgHeight, elementX: xMouseImg } = useMouseInElement(image);

const distanceFromCenter = computed(() => Math.round(elementX.value - elementWidth.value / 2) / 100);
const power = computed(() => xMouseImg.value - imgWidth.value / 2);

const { lgAndSmaller } = getBreakpoints();

gsap.registerPlugin(ScrollTrigger);

if (process.client && lgAndSmaller.value) {
  const projectsGSAP = gsap.utils.toArray('.project');
  projectsGSAP.forEach((project) => {
    gsap.to('.project', {
      scrollTrigger: {
        trigger: project as HTMLElement,
        start: 'center center',
        end: '+=130',
        toggleClass: 'textIsActive',
        onEnter: handleShowMobile,
        onLeave: handleHideMobile,
        onEnterBack: handleShowMobile,
        onLeaveBack: handleHideLeaveBackMobile,
        scrub: true,
      },
    });
  });
}

function hideImage() {
  gsap.timeline().to('.image', {
    duration: 0.5,
    maxHeight: 0,
    rotate: 0,
    height: 0,
  });
}

function handleShowMobile(e: ScrollTrigger) {
  const projectName = e?.trigger?.id;
  e.trigger?.setAttribute('mouse', '1');
  handleSwitchImage(`../assets/img/${projectName}.png`);
  showImage.value = true;

  gsap.timeline().to('.image', {
    duration: 0.3,
    height: '280px',
    position: 'fixed',
    top: '25%',
    right: '-30px',
    rotate: 8,
    maxHeight: '280px',
    opacity: 1,
  });
}

function handleHideMobile(e: ScrollTrigger) {
  e.trigger?.removeAttribute('mouse');
  if (e.trigger?.id !== 'countries') return;

  showImage.value = false;

  hideImage();
}

function handleHideLeaveBackMobile(e: ScrollTrigger) {
  e.trigger?.removeAttribute('mouse');

  if (e.trigger?.id !== 'donuts') return;
  showImage.value = false;

  hideImage();
}

function handleShowImage() {
  if (lgAndSmaller.value) return;

  showImage.value = true;
  gsap.timeline().to('.image', {
    duration: 0.5,
    x: elementX.value - imgWidth.value / 2,
    y: yMouse.value - imgHeight.value / 2,
    maxHeight: '600px',
    height: '600px',
    opacity: 1,
  });
}

function handleHideImage() {
  showImage.value = false;

  hideImage();
}

function handleSwitchImage(src: string) {
  srcImage.value = src;
}

function handleMoveImage() {
  if (lgAndSmaller.value) return;
  gsap.to('.image', {
    duration: 1,
    translateX: elementX.value - imgWidth.value / 2,
    translateY: yMouse.value - imgHeight.value / 3,
    rotate: distanceFromCenter.value * 3,
    filter: `brightness(${Math.abs(power.value / 10) + 80}%) sepia(25%)`,
    ease: Power1.easeOut,
  });
}
</script>

<template>
  <section class="relative col-span-12 flex flex-col w-full">
    <BaseTitle
      :class="{ '!opacity-0': showImage }"
      class="relative project-title text-center pb-28 opacity-0 z-10 transition"
      ><span class="anchor absolute -top-32"></span>Selected projects</BaseTitle
    >
    <div
      id="projects"
      ref="target"
      @mouseleave="handleHideImage"
      @mouseenter="handleShowImage"
      @mousemove="handleMoveImage"
      @click="handleHideImage"
    >
      <ProjectLink
        id="donuts"
        :to="{ path: 'projects/donuts' }"
        :is-show-image="showImage"
        @mouseenter="handleSwitchImage('../assets/img/donuts.png')"
      >
        Donuts
        <template #desc> advanced tasks and notes manager </template>
      </ProjectLink>
      <ProjectLink
        id="memorize"
        :is-show-image="showImage"
        :to="'projects/memorize'"
        @mouseenter="handleSwitchImage('../assets/img/memorize.png')"
      >
        Memorize
        <template #desc> memory card game </template>
      </ProjectLink>
      <ProjectLink
        id="baryt"
        :is-show-image="showImage"
        :to="'projects/baryt'"
        @mouseenter="handleSwitchImage('../assets/img/baryt.png')"
      >
        Restauracja Baryt
        <template #desc> website and full branding for restaurant</template>
      </ProjectLink>
      <ProjectLink
        id="countries"
        :to="'projects/countries'"
        :is-show-image="showImage"
        @mouseenter="handleSwitchImage('../assets/img/countries.png')"
      >
        Countries Rest API
        <template #desc> frontendmentor challange </template>
      </ProjectLink>
    </div>
    <img
      ref="image"
      :src="srcImage"
      class="image right-0 top-1/2 absolute w-64 sm:w-[448px] object-cover rounded-xl opacity-0 pointer-events-none select-none z-10"
    />
  </section>
</template>
