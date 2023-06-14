<script setup lang="ts">
import { gsap } from 'gsap';

const title = ref<HTMLElement | null>(null);

onMounted(async () => {
  split();
  await handleAnimation();
  document.getElementById('title-11')?.classList.add('shadow-letter', '!rotate-12');
});

function handleAnimation() {
  return new Promise<void>((resolve) => {
    const tl = gsap.timeline({
      onComplete: resolve,
    });

    tl.to('.fade', {
      opacity: 1,
      scale: 1,
      translateX: 0,
      duration: 0.25,
      stagger: 0.07,
    })
      .to(
        '#mainTitle',
        {
          opacity: 1,
          translateX: 0,
          duration: 1.2,
        },
        '-=2'
      )
      .to(
        '#mainTitle',
        {
          translateY: 0,
          duration: 0.6,
        },
        '-=.4'
      );
  });
}

function split() {
  const text = 'Frontend Developer';

  text.split('').forEach((w, idx) => {
    if (w.length > 0) {
      const html = `<span class="fade scale-105 align-bottom inline-block shadow-alt transition duration-500 opacity-0" id="title-${idx}">${w}</span>`;
      title.value?.insertAdjacentHTML('beforeend', html);
    }
    if (idx === 7) {
      const br = document.createElement('br');
      title.value?.appendChild(br);
    }
  });

  const br = document.createElement('br');
  title.value?.appendChild(br);
}
</script>

<template>
  <h1
    ref="title"
    id="mainTitle"
    class="text-[70px] leading-[4rem] sm:text-[180px] sm:leading-[8.5rem] h-48 sm:h-96 text-base-content font-serif font-semibold italic bg-clip-text text-clip [&>span:hover]:transition [&>span:hover]:scale-105 [&>span:hover]:!rotate-12 cursor-default select-none -translate-x-60 tracking-tighter lg:col-span-12 lg:col-start-4 flex-nowrap"
  >
    <slot />
  </h1>
</template>

<style>
.shadow-letter {
  text-shadow: 0 0 5px #f3d16f, 0 0 10px #f3d16f, 0 0 20px #e3552e;
}

.shadow-alt:hover {
  text-shadow: 0 0 5px #f3d16f, 0 0 10px #f3d16f, 0 0 20px #e3552e;
}
</style>
