<script setup lang="ts">
const showImage = ref(false);
const target = ref();

type Props = {
  src: string;
};
defineProps<Props>();

const { elementX: xImg, x: xMouse } = useMouseInElement(target);

const distance = computed(() => xMouse.value - xImg.value);

const movingPosition = computed(() => `${xImg.value + distance.value / 1.2}px`);

// this.position.x += (x - this.position.x) / this.lag;

// const link = document.querySelectorAll('.link');
// const linkHoverReveal = document.querySelectorAll('.hover-reveal');
// const linkImages = document.querySelectorAll('.hidden-img');

// const handleMoveImage = (e) => {};

// link.addEventListener('mousemove', (e) => {
//   linkHoverReveal.style.opacity = 1;
//   linkHoverReveal.style.transform = `translate(-100%, -50% ) rotate(5deg)`;
//   linkImages.style.transform = 'scale(1, 1)';
//   linkHoverReveal.style.left = e.clientX + 'px';
// });

//   link[i].addEventListener('mouseleave', () => {
//     linkHoverReveal[i].style.opacity = 0;
//     linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
//     linkImages[i].style.transform = 'scale(0.8, 0.8)';
//   });
// }
</script>

<template>
  <div
    @mouseenter="showImage = true"
    @mouseleave="showImage = false"
    class="project relative h-24 border-t-2 border-b-2 border-base [&>*]:text-base-content bg-base-100 hover:border-base-content flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center transition cursor-pointer w-full sm:px-32 opacity-0"
  >
    <img
      ref="target"
      :src="src"
      class="w-40 h-60 sm:w-80 sm:h-96 object-cover rounded-xl absolute left-80 !z-20 opacity-0 transition duration-500 scale-80 pointer-events-none"
      :class="{
        '!opacity-100 !duration-500 !scale-110 !rotate-3': showImage,
      }"
      :style="{ left: movingPosition }"
    />
    <ProjectTitle>
      <slot />
    </ProjectTitle>
    <ProjectDescription>
      <slot name="desc" />
    </ProjectDescription>
  </div>
</template>

<style scoped>
/* .hover-reveal {
  position: absolute;
  width: 300px;
  height: 400px;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.5s ease-out;
}

.hover-reveal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: transform 0.4s ease-out;
} */
</style>
