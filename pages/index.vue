<script setup lang="ts">
import { gsap, Power4 } from 'gsap';

onMounted(() => {
  const tl = gsap.timeline();

  tl.to('#headSubOne', { opacity: 1, duration: 0.4, delay: 1.8 })
    .to(['#headSubTwo', '#navOne', '#navTwo'], { opacity: 1, duration: 0.4 }, '-=0.3')
    .to('#headSubThree', { opacity: 1, duration: 0.4 }, '-=0.3')
    .to('#headDivider', { x: 0, duration: 0.6, ease: Power4.easeOut }, '-=0.5')
    .to('#subOne', { opacity: 1, duration: 0.6 })
    .to('#subTwo', {
      opacity: 1,
      duration: 0.6,
    });
});
</script>

<template>
  <div class="max-w-[1440px] w-full flex flex-col items-center">
    <header id="header" class="fixed w-full h-32 flex flex-col justify-center items-center z-10 bg-base">
      <HeaderSubtitleContainer>
        <HeaderSubtitle id="headSubOne" class="opacity-0">Freelance frontend developer</HeaderSubtitle>
        <HeaderSubtitle id="headSubTwo" class="flex gap-2 items-center opacity-0">
          <IconCircle />
          Available for work
        </HeaderSubtitle>
        <HeaderSubtitle id="headSubThree" class="opacity-0">Based in Wrocław, Poland</HeaderSubtitle>
      </HeaderSubtitleContainer>
      <BaseDivider id="headDivider" class="my-4 -translate-x-full" />
      <nav class="flex gap-8">
        <NavbarLink id="navOne" class="opacity-0" :to="{ hash: '#contact' }">contact</NavbarLink>
        <NavbarLink id="navTwo" class="opacity-0" href="https://github.com/aktyw">projects</NavbarLink>
      </nav>
    </header>
    <main class="grid grid-cols-12 min-h-screen w-full flex-nowrap pb-96">
      <div class="col-span-12 flex flex-col items-center justify-center pt-32 min-h-[80vh] align-bottom">
        <MainTitle> </MainTitle>
      </div>
      <section class="col-start-8 col-span-12 flex flex-col gap-2 pb-64">
        <div id="subOne" class="opacity-0">
          <BaseTitle>Arek Tywonek</BaseTitle>
          <p class="font-sans max-w-[32ch] text-base-content">
            I am an <span class="italic">open-minded</span> and <span class="italic">detail-focused</span> developer
            from Poland.<br />
            My passion is creating <span class="italic">visually pleasing</span> websites and applications.
          </p>
        </div>
      </section>
      <section class="col-start-3 col-span-12 flex flex-col gap-2 pb-80">
        <div id="subTwo" class="opacity-0">
          <BaseTitle>Technologies</BaseTitle>
          <p class="font-sans max-w-[40ch] text-base-content">
            Javascript, Typescript, Vue, Nuxt<br />
            HTML, CSS, SASS / SCSS, BEM<br />
            Tailwind, GSAP, DaisyUI, RWD<br />
            Vite, Parcel, Gulp <br />
            Git / Gitflow, Github, Vitest, NPM, ESLint<br />
            Firebase, MVC<br />
            Figma, Affinity - Designer, Photo
          </p>
        </div>
      </section>
      <section class="relative col-span-12 flex flex-col w-full">
        <BaseTitle class="text-center pb-16">Selected Projects</BaseTitle>
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
    <footer id="contact" class="relative flex justify-center pb-[32rem]">
      <BaseTitle class="uppercase text-9xl italic">Let's Work Together</BaseTitle>
      <LazyFooterContact class="absolute flex justify-center"></LazyFooterContact>
    </footer>
  </div>
</template>

<style scoped></style>
