<template>
  <section style="width: 500px">
    <template v-if="!dataStore.flowerSelected">
      <v-skeleton-loader
        class="bg-transparent"
        height="25rem"
        width="25rem"
        :type="Array(6).fill('text').join(',')"
      />
    </template>

    <template v-else>
      <v-list lines="two" class="bg-transparent mt-n2">
        <v-list-item title="Nombre común">
          <h2 class="custom-name text-primary">{{ dataStore.flowerSelected?.name }}</h2>
        </v-list-item>
        <v-list-item
          title="Nombre científico"
          :subtitle="dataStore.flowerSelected?.binomialName"
        ></v-list-item>
        <v-list-item
          title="Precio"
          :subtitle="setPrice(dataStore.flowerSelected?.price)"
        ></v-list-item>
        <v-list-item
          title="Riegos por semana"
          :subtitle="dataStore.flowerSelected?.wateringsPerWeek"
        ></v-list-item>
        <v-list-item
          title="Tipo de fertilizante"
          :subtitle="setFertilizerType(dataStore.flowerSelected?.fertilizerType)"
        ></v-list-item>
        <v-list-item
          title="Altura (cm)"
          :subtitle="dataStore.flowerSelected?.heightInCm"
        ></v-list-item>
      </v-list>
    </template>
  </section>
</template>

<script setup>
import { useDataStore } from '@/stores/data.js'
const dataStore = useDataStore()

function setPrice(price) {
  return `${String(price)?.replace('.', ',')} €`
}

function setFertilizerType(fertilizerType) {
  const options = {
    nitrogen: 'Nitrogenado',
    phosphorus: 'Fosforado'
  }

  return options?.[fertilizerType] ?? 'Desconocido'
}
</script>
