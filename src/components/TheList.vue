<script setup>
import { computed } from 'vue';
import { useDataStore } from '@/stores/data.js';
import { useRouter } from 'vue-router';

import FlowerItemCard from '@/components/FlowerItemCardList.vue';
import IconAPIError from '@/components/icons/IconAPIError.vue';
import IconItemNotFound from './icons/IconItemNotFound.vue';
import SearchInputField from '@/components/SearchInputField.vue';

const dataStore = useDataStore();
const router = useRouter();

function handleClick(id = null) {
  if (id) router.push({ name: 'details', params: { id } });
}

const dataLoadedItemNotFound = computed(() => {
  return dataStore.dataLoadIsReady && dataStore.searchInput && !dataStore.filteredFlowers?.length;
});

// onCreated
dataStore.fetchData();
</script>

<template>
  <section class="mt-6">
    <v-container>
      <v-row class="justify-end align-center">
        <v-col cols="12" md="6">
          <SearchInputField />
        </v-col>
      </v-row>

      <v-row class="justify-center align-center">
        <!-- API with error -->
        <template v-if="dataStore.dataLoadHaveError">
          <v-col
            class="d-flex align-center justify-center bg-error pa-10 rounded-xl"
            cols="12"
            lg="9"
          >
            <IconAPIError />
            <span class="px-2">{{ dataStore.apiError?.message ?? '' }}</span>
          </v-col>
        </template>

        <!-- API is loading -->
        <template v-else-if="dataStore.dataLoadIsLoading">
          <v-col cols="12" lg="3" md="6" v-for="item in 8" :key="item">
            <v-skeleton-loader class="bg-transparent" height="250px" type="image, text" />
          </v-col>
        </template>

        <!-- API is loaded and item not found -->
        <template v-else>
          <template v-if="dataLoadedItemNotFound">
            <v-col
              class="d-flex align-center justify-center bg-warning pa-10 rounded-xl"
              cols="12"
              lg="9"
            >
              <IconItemNotFound />
              <span class="px-2">No existen items con ese criterio de búsqueda</span>
            </v-col>
          </template>

          <!-- API is loaded and item found -->
          <template v-else>
            <v-col
              v-for="flower in dataStore.filteredFlowers"
              :id="flower.id"
              :key="flower.id"
              class="pa-3"
              cols="12"
              lg="3"
              sm="6"
            >
              <FlowerItemCard
                :name="flower.name"
                :binomialName="flower.binomialName"
                :imgUrl="flower.imgUrl"
                :price="flower.price"
                @click="handleClick(flower.id)"
              />
            </v-col>
          </template>
        </template>
      </v-row>
    </v-container>
  </section>
</template>
