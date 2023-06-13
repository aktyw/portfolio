<script setup lang="ts">
type Props = {
  href?: string;
  to?: string | { hash: string };
};

defineProps<Props>();
</script>
<template>
  <a v-if="href" :href="href" class="text-sm text-base-content hover:underline hover:text-primary transition"
    ><slot
  /></a>
  <NuxtLink v-else :to="to" class="text-sm text-base-content hover:underline hover:text-primary transition"
    ><slot
  /></NuxtLink>
</template>
