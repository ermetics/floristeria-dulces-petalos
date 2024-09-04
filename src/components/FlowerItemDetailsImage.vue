<script setup>
import { useDataStore } from '@/stores/data.js';
const dataStore = useDataStore();
</script>

<template>
  <section>
    <template v-if="!dataStore.flowerSelected">
      <v-skeleton-loader class="bg-transparent" height="25rem" width="25rem" type="image" />
    </template>

    <template v-else>
      <div
        class="custom-flower"
        :style="`background-image: url(${dataStore.flowerSelected?.imgUrl})`"
      />
    </template>
  </section>
</template>

<style scoped>
.custom-flower {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 18rem;
  height: 18rem;
  border-radius: 20px;
  margin-top: -12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
}

.custom-flower:hover {
  transform: scale(1.2);
  transition: all 0.8s;
  z-index: 1;
}
</style>
