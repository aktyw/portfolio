import { NavbarLink, MainSubtitle } from '../.nuxt/components';
<script setup lang="ts"></script>

<template>
  <div class="max-w-[1440px] w-full flex flex-col items-center">
    <header class="fixed w-full h-60 flex flex-col justify-center items-center z-10 bg-base">
      <HeaderTitle>Arek Tywonek</HeaderTitle>
      <HeaderSubtitleContainer>
        <HeaderSubtitle>Freelance frontend developer</HeaderSubtitle>
        <HeaderSubtitle class="flex gap-2 items-center">
          <IconCircle />
          Available for work
        </HeaderSubtitle>
        <HeaderSubtitle>Based in Wrocław, Poland</HeaderSubtitle>
      </HeaderSubtitleContainer>
      <BaseDivider class="my-4" />
      <nav class="flex gap-8">
        <NavbarLink href="https://github.com/aktyw">contact</NavbarLink>
        <NavbarLink href="https://github.com/aktyw">about</NavbarLink>
        <NavbarLink href="https://github.com/aktyw">projects</NavbarLink>
      </nav>
    </header>
    <main class="grid grid-cols-12 min-h-screen">
      <div class="col-span-12 flex flex-col items-center justify-center pt-60 min-h-[60vh]">
        <MainTitle />
        <MainSubtitle />
      </div>
      <section class="col-start-7 col-span-6 flex flex-col gap-2">
        <BaseTitle>Technologies</BaseTitle>
        <p class="font-sans max-w-[40ch]">
          Javascript, Typescript, Vue, Nuxt, Vitest, Vite, HTML, CSS, SASS/SCSS, BEM, Tailwind, GSAP, DaisyUI, RWD,
          Parcel, Gulp, Git/Gitflow, Github, Firebase, MVC, NPM, ESLint, Prettier, Figma, Affinity - Designer, Photo
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
