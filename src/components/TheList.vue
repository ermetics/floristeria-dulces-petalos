<template>
  <section class="mt-6">
    <v-container>
      <v-row class="justify-end align-center">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="search"
            density="comfortable"
            label="Búsqueda"
            outline
            placeholder="Orquídea, ramo novia..."
            variant="outlined"
          >
            <template #clear>
              <svg
                id="clear-input-search"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-square-x"
                @click="search = ''"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z"
                />
              </svg>
            </template>
          </v-text-field>
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
              :id="flower.id"
              :key="flower.id"
              cols="12"
              lg="3"
              md="6"
              v-for="flower in filteredFlowers"
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

const dataStore = useDataStore()
const router = useRouter()
const search = ref('')

const filteredFlowers = computed(() => {
  return dataStore.flowers?.filter((flower) => {
    return flower?.name?.toLowerCase()?.includes(search.value?.toLowerCase())
  })
})

function handleClick(id = null) {
  if (id) router.push({ name: 'details', params: { id } })
}

// onCreated
dataStore.fetchData()
</script>
