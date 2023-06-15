<script setup lang="ts">
const route = useRoute();

const project = [
  { title: 'Donuts', description: 'a', live: '', code: '' },
  { title: 'Memorize', description: 'a', live: '', code: '' },
  { title: 'Baryt', description: 'a', live: '', code: '' },
  { title: 'Countries', description: 'a', live: '', code: '' },
];

console.log(route.params.id);
</script>

<template>
  <div class="fixed top-0 left-0 bg-base-100 h-screen w-full flex flex-col gap-4 p-12">
    <div>Go back</div>
    <div class="flex">
      <img src="" alt="" />
      <div>
        <div class="flex flex-col justify-between items-center">
          <div class="flex flex-col gap-2">
            <!-- <p>{{ project[route.params.id].description }}</p> -->

            <div class="flex gap-2">
              <a href="">project[props.id].code</a>
              <a href="">project[props.id].live</a>
            </div>
          </div>
          <!-- <h2>{{ project[${route.params.id}].title }}</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>
