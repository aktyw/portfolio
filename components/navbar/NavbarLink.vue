<script setup lang="ts">
type Props = {
  href?: string;
  to?: string;
};

defineProps<Props>();
</script>
<template>
  <a v-if="href" :href="href" class="text-sm hover:underline"><slot /></a>
  <NuxtLink v-else :to="to" class="text-sm hover:underline"><slot /></NuxtLink>
</template>
