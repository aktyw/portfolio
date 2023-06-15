<template>
  <a
    class="relative badge p-4 sm:p-12 w-full text-xl cursor-pointer uppercase border-base-100 h-12 border rounded-[48px] text-base-100 flex justify-center items-center font-bold text-x transition overflow-hidden z-10"
  >
    <slot />
  </a>
</template>

<style scoped>
.badge:hover {
}

.badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: #dabf6e;
  z-index: -1;
  transition: transform 0.3s;
}

.badge:hover::before {
  transition: transform 0.3s;
  transform: translateX(0%);
}
</style>
