import { NavbarLink } from '../.nuxt/components';
<script setup lang="ts"></script>

<template>
  <div class="max-w-[1440px] w-full">
    <header class="w-full h-60 flex flex-col justify-center items-center">
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
  </div>
</template>

<style scoped></style>
