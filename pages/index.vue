<script setup lang="ts">
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBreakpoints } from '../composables/useBreakpoints';
const { smAndSmaller } = getBreakpoints();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline();
  const mm = gsap.matchMedia();

  mm.add('(min-width: 641px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#mainTitle',
          start: 'bottom 500px',
          scrub: 1,
        },
      })
      .to('#mainTitle', {
        xPercent: 5,
        opacity: 0,
      });
  });

  mm.add('(min-width: 641px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#mainTitle',
          start: 'top 100px',
          scrub: 1,
        },
      })
      .to('#mainTitle', {
        xPercent: 10,
        opacity: 0,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#subOne',
          start: 'top 100px',
          scrub: 1,
          endTrigger: '#subTwo',
        },
      })
      .to('#subOne', {
        opacity: 0,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#subTwo',
          start: 'top 100px',
          scrub: 1,
        },
      })
      .to('#subTwo', {
        opacity: 0,
      });
  });

  mm.add('(min-width: 641px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.footer-title',
          start: 'bottom bottom',
          scrub: 1,
          markers: true,
        },
      })
      .to('.circle', { width: '2000px', height: '2000px' })
      .to(document.body, { background: '#f3d98b ' });
  });

  mm.add('(min-width: 1920px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.footer-title',
          start: 'bottom bottom',
          scrub: 1,
          markers: true,
        },
      })
      .to('.circle', { width: '6000px', height: '6000px' })
      .to(document.body, { background: '#f3d98b ' });
  });

  mm.add('(max-width: 640px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.footer-title',
          start: 'bottom bottom',
          scrub: 1,
          markers: true,
        },
      })
      .to('.circle', { width: '2000px', height: '2600px' });
  });

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: '.projects',
  //       start: 'center bottom',
  //       toggleActions: 'play reverse play reverse',
  //       markers: true,
  //     },
  //   })
  //   .to(['.app', '#header'], {
  //     backgroundColor: '#f7f7f7',
  //   });

  mm.add('(max-width: 2640px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#mainTitle',
          start: 'top 100px',
          scrub: 1,
        },
      })
      .to('#mainTitle', {
        xPercent: 10,
        opacity: 0,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#subOne',
          start: 'top 100px',
          scrub: 1,
          endTrigger: '#subTwo',
        },
      })
      .to('#subOne', {
        opacity: 0,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#subTwo',
          start: 'top 100px',
          scrub: 1,
        },
      })
      .to('#subTwo', {
        opacity: 0,
      });
  });

  let tl5 = gsap
    .timeline({
      scrollTrigger: {
        trigger: '#subTwo',
        start: 'bottom bottom',
      },
    })
    .to('.project', {
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
    });

  tl.to('#headSubOne', { opacity: 1, duration: 0.4, delay: 1.8 })
    .to(['#headSubTwo', '#navOne', '#navTwo'], { opacity: 1, duration: 0.5 }, '-=0.2')
    .to('#headSubThree', { opacity: 1, duration: 0.5 }, '-=0.2')
    .to('#headDivider', { x: 0, duration: 0.8, ease: Power4.easeOut }, '-=0.5')
    .to('#subOne', { opacity: 1, duration: 0.5 });
});
</script>

<template>
  <div class="max-w-[1440px] w-full flex flex-col items-center">
    <header
      id="header"
      class="fixed w-full h-24 sm:h-32 flex flex-col justify-center items-center bg-base-100 z-20 bg-base"
    >
      <HeaderSubtitleContainer>
        <HeaderSubtitle v-if="!smAndSmaller" id="headSubOne" class="opacity-0 col-start-2 col-span-3"
          >Freelance frontend developer</HeaderSubtitle
        >
        <HeaderSubtitle
          id="headSubTwo"
          class="flex gap-2 items-center opacity-0 justify-center"
          :class="{ 'col-start-5 col-span-1': !smAndSmaller }"
        >
          <IconCircle />
          Available for work
        </HeaderSubtitle>
        <HeaderSubtitle id="headSubThree" class="opacity-0" :class="{ 'col-start-9 col-span-1': !smAndSmaller }">{{
          smAndSmaller ? 'Based in Wrocław' : 'Based in Wrocław, Poland'
        }}</HeaderSubtitle>
      </HeaderSubtitleContainer>
      <BaseDivider id="headDivider" />
      <nav class="flex w-full justify-center">
        <div class="flex gap-4 sm:block mt-2 sm:mt-0">
          <NavbarLink id="navOne" class="opacity-0 sm:mx-8" :to="{ hash: '#contact' }">contact</NavbarLink>
          <NavbarLink id="navTwo" class="opacity-0" href="https://github.com/aktyw">projects</NavbarLink>
        </div>
      </nav>
    </header>
    <main class="grid grid-cols-12 min-h-screen w-full flex-nowrap pb-36 sm:pb-96">
      <div
        class="lg:grid lg:grid-cols-12 col-span-12 flex flex-col items-center justify-around sm:justify-center pt-24 sm:pt-32 h-screen sm:min-h-[80vh] align-bottom pb-12"
      >
        <MainTitle />
        <section class="lg:col-span-12 lg:col-start-8">
          <div id="subOne" class="opacity-0">
            <BaseTitle class="leading-8">Arek Tywonek</BaseTitle>
            <p class="text-sm sm:text-md font-sans max-w-[32ch] text-base-content">
              I'm an <span class="italic">open-minded</span> and <span class="italic">detail-oriented</span> developer
              whose passion is providing value by <span class="italic">visually pleasing</span> websites and
              applications.
            </p>
          </div>
        </section>
      </div>

      <section class="col-start-5 lg:col-start-3 col-span-12 flex flex-col gap-2 pb-24 sm:pb-96">
        <div id="subTwo">
          <BaseTitle>Technologies</BaseTitle>
          <p class="text-sm sm:text-md font-sans sm:max-w-[40ch] text-base-content">
            Javascript, Typescript, Vue, Nuxt<br />
            HTML, CSS, SASS / SCSS, BEM<br />
            Tailwind, GSAP, DaisyUI, RWD<br />
            Vite, Parcel, Gulp <br />
            Git / Gitflow, Github, NPM, ESLint<br />
            Firebase, MVC<br />
            Figma, Affinity - Designer, Photo
          </p>
        </div>
      </section>

      <ProjectList />
    </main>
    <footer id="contact" class="relative flex flex-col justify-center items-center text-center z-30 h-screen">
      <div class="flex flex-col gap-12">
        <BaseTitle class="footer-title uppercase text-6xl sm:text-9xl italic z-50 pb-12 !text-base-100"
          >Let's Work<br />
          Together</BaseTitle
        >
        <LazyFooterContact></LazyFooterContact>
      </div>
      <span
        class="absolute bottom-8 text-base-100 py-4 z-20 uppercase flex items-center justify-center text-sm font-bold"
        >portfolio of arek tywonek © 2023</span
      >
    </footer>
  </div>
</template>

<style scoped></style>
