<script setup lang="ts">
type Props = {
  isShowImage: boolean;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="under project relative h-24 [&>*]:text-base-content [&>*]:duration-700 flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center transition cursor-pointer w-full sm:px-32 opacity-0 z-20 object-top"
    :class="{
      '[&>*]:!text-gray-600 [&>*]:opacity-50 [&>*]:hover:!text-base-content [&>*]:hover:opacity-100': isShowImage,
    }"
  >
    <ProjectTitle>
      <slot />
    </ProjectTitle>
    <ProjectDescription>
      <slot name="desc" />
    </ProjectDescription>
  </NuxtLink>
</template>

<style scoped>
.under::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: rgb(243 217 139);
  transform-origin: bottom right;
  transition: transform 0.45s ease-out;
}

.under:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.45s ease-out;
}
</style>
