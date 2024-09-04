<script setup>
import { useDataStore } from '@/stores/data.js';
import IconInputClear from '@/components/icons/IconInputClear.vue';

const dataStore = useDataStore();
</script>

<template>
  <v-text-field
    :clearable="!!dataStore.searchInput"
    :disabled="dataStore.apiError?.status"
    :value="dataStore.searchInput"
    autofocus
    density="comfortable"
    label="Búsqueda"
    placeholder="Orquídea, rosa..."
    variant="outlined"
    @update:modelValue="dataStore.onUpdateSearchInput($event)"
  >
    <template #clear>
      <IconInputClear @click="dataStore.onClearSearchInput" />
    </template>
  </v-text-field>
</template>
