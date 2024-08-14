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

<script setup>
import { useDataStore } from '@/stores/data.js'
const dataStore = useDataStore()
</script>

<style scoped>
.custom-flower {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 15rem;
  height: 15rem;
  border-radius: 20px;
  margin-top: -12px;
}
</style>
