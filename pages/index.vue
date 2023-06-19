<script setup lang="ts">
import { useStartAnimation } from '../composables/useStartAnimation';

useStartAnimation();
</script>

<template>
  <div class="relative max-w-[1440px] w-full flex flex-col items-center">
    <TheHeader />

    <main class="grid grid-cols-12 min-h-screen w-full flex-nowrap pb-12 sm:pb-32">
      <MainContainer>
        <MainTitle />
        <MainAbout />
      </MainContainer>

      <MainTechnologies />

      <ProjectList />
    </main>

    <footer id="contact" class="relative flex flex-col justify-center items-center text-center z-30 h-screen">
      <LazyFooterContact />
      <LazyFooterAuthor>Portfolio of Arek Tywonek © 2023</LazyFooterAuthor>
    </footer>
  </div>
</template>

<style scoped></style>
