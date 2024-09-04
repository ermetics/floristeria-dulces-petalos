<script setup>
import { onBeforeUnmount } from 'vue';
import { useDataStore } from '@/stores/data.js';

import TheDetails from '@/components/TheDetails.vue';

const { resetSelectedFlower } = useDataStore();

onBeforeUnmount(() => {
  resetSelectedFlower();
});
</script>

<template>
  <TheDetails />
</template>
