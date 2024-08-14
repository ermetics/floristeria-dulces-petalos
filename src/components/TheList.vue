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
              <IconInputClear @click="search = ''" />
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
import IconInputClear from '@/components/icons/IconInputClear.vue'

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
