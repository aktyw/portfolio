<script setup lang="ts"></script>

<template>
  <div
    class="project relative h-24 border-b border-base-100 [&>*]:text-base-content hover:border-base-content flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center transition cursor-pointer w-full sm:px-32 opacity-0 z-30"
  >
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
