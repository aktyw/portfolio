<script setup lang="ts">
import { getBreakpoints } from '../../composables/useBreakpoints';
const { smAndSmaller } = getBreakpoints();
</script>

<template>
  <header
    id="header"
    class="fixed w-full h-24 sm:h-32 flex flex-col justify-center items-center bg-base-100 z-30 bg-base"
  >
    <TheHeaderSubtitleContainer>
      <TheHeaderSubtitle v-if="!smAndSmaller" id="headSubOne" class="opacity-0 col-start-2 col-span-3"
        >Freelance frontend developer</TheHeaderSubtitle
      >
      <TheHeaderSubtitle
        id="headSubTwo"
        class="flex gap-2 items-center opacity-0 justify-center"
        :class="{ 'col-start-5 col-span-1': !smAndSmaller }"
      >
        <IconCircle />
        Available for work
      </TheHeaderSubtitle>
      <TheHeaderSubtitle id="headSubThree" class="opacity-0" :class="{ 'col-start-9 col-span-1': !smAndSmaller }">{{
        smAndSmaller ? 'Based in Wrocław' : 'Based in Wrocław, Poland'
      }}</TheHeaderSubtitle>
    </TheHeaderSubtitleContainer>

    <BaseDivider id="headDivider" />

    <TheNavbar />
  </header>
</template>
