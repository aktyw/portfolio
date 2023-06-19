<template>
  <nav class="flex w-full justify-center z-40">
    <div tabindex="-1" class="flex gap-4 sm:block mt-2 sm:mt-0 z-40">
      <TheNavbarLink id="navOne" tabindex="0" class="opacity-0 sm:mx-8" :to="{ hash: '#contact' }"
        >contact</TheNavbarLink
      >
      <TheNavbarLink id="navTwo" class="opacity-0" to="/projects/donuts">projects</TheNavbarLink>
    </div>
  </nav>
</template>
