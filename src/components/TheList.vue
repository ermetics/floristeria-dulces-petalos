<template>
  <section class="mt-6">
    <v-container>
      <v-row class="justify-end align-center">
        <v-col cols="12" md="6">
          <SearchInputField
            :modelValue="search"
            @update:modelValue="onUpdateSearch($event)"
            @click:clear="onClearSearch"
          />
        </v-col>
      </v-row>

      <v-row class="justify-center align-center">
        <template v-if="!dataStore.flowers">
          <v-col cols="12" lg="3" md="6" v-for="(flower, index) in 8" :key="index">
            <v-skeleton-loader class="bg-transparent" height="250px" type="image, text" />
          </v-col>
        </template>

        <template v-else>
          <template v-if="search && filteredFlowers.length === 0">
            No existen items con el criterio de búsqueda
          </template>
          <template v-else>
            <v-col
              v-for="flower in filteredFlowers"
              :id="flower.id"
              :key="flower.id"
              class="pa-3"
              cols="12"
              lg="3"
              md="6"
            >
              <FlowerItem
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

<script setup>
import { computed, ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useRouter } from 'vue-router'
import FlowerItem from '@/components/FlowerItemList.vue'
import SearchInputField from '@/components/SearchInputField.vue'

const dataStore = useDataStore()
const router = useRouter()
const search = ref('')

const filteredFlowers = computed(() => {
  return dataStore.flowers?.filter((flower) => {
    return (
      flower?.name?.toLowerCase()?.includes(search.value?.toLowerCase()) ||
      flower?.binomialName?.toLowerCase()?.includes(search.value?.toLowerCase())
    )
  })
})

function handleClick(id = null) {
  if (id) router.push({ name: 'details', params: { id } })
}

function onClearSearch() {
  search.value = ''
}

function onUpdateSearch(value) {
  search.value = value
}

// onCreated
dataStore.fetchData()
</script>
