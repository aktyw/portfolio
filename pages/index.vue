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

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.footer-title',
        start: 'top bottom',
        scrub: 1,
        markers: true,
      },
    })
    .to('.circle', { width: '3800px', height: '3800px' });

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
    <main class="relative grid grid-cols-12 min-h-screen w-full flex-nowrap pb-24 sm:pb-96">
      <div
        class="lg:grid lg:grid-cols-12 col-span-12 flex flex-col items-center justify-around sm:justify-center pt-24 sm:pt-32 h-screen sm:min-h-[80vh] align-bottom pb-12"
      >
        <MainTitle />
        <section class="col-span-12 lg:col-start-8">
          <div id="subOne" class="opacity-0">
            <BaseTitle class="leading-8">Hi, I'm Arek Tywonek<br /></BaseTitle>
            <p class="text-sm sm:text-md font-sans sm:max-w-[32ch] text-base-content">
              An <span class="italic">open-minded</span> and <span class="italic">detail-oriented</span> developer whose
              passion is providing <span>value</span> by <span class="italic">visually pleasing</span> websites and
              applications.
            </p>
          </div>
        </section>
      </div>

      <section class="lg:col-start-3 col-span-12 flex flex-col gap-2 pb-24 sm:pb-96">
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
      <section id="projects" class="relative col-span-12 flex flex-col w-full">
        <BaseTitle class="project sm:text-center pb-16 opacity-0">Selected Projects</BaseTitle>
        <ProjectLink src="../assets/img/donuts.png">
          Donuts
          <template #desc> advanced tasks and notes manager </template>
        </ProjectLink>
        <ProjectLink src="../assets/img/memorize.png">
          Memorize
          <template #desc> memory card game </template>
        </ProjectLink>
        <ProjectLink src="../assets/img/baryt.png">
          Restauracja Baryt
          <template #desc> website and full branding for restaurant</template>
        </ProjectLink>
        <ProjectLink src="../assets/img/countries.png">
          Countries Rest API
          <template #desc> frontendmentor challanges </template>
        </ProjectLink>
      </section>
    </main>
    <footer id="contact" class="relative flex flex-col text-center z-30">
      <div class="flex flex-col gap-12">
        <BaseTitle class="footer-title uppercase text-5xl sm:text-9xl italic z-50 pb-12 !text-base-100 text-left"
          >Let's Work<br />
          Together</BaseTitle
        >
        <LazyFooterContact></LazyFooterContact>
      </div>
      <span class="text-base-100 pt-24 uppercase flex items-center justify-center text-sm font-light"
        >portfolio of arek tywonek © 2023</span
      >
    </footer>
  </div>
</template>

<style scoped></style>
