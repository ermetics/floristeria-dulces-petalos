<template>
  <section class="mt-10">
    <v-container>
      <v-row class="justify-end align-start">
        <v-col cols="auto">
          <v-btn id="back-button" variant="outlined" @click="router.push({ name: 'home' })">
            <IconBackButton />
            Volver
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="justify-center align-center">
        <v-col cols="12">
          <v-row class="justify-center align-start">
            <v-col cols="12" sm="auto">
              <FlowerItemImage />
            </v-col>

            <v-col cols="12" sm="auto">
              <FlowerItemDescription />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useDataStore } from '@/stores/data.js'
import { useRoute, useRouter } from 'vue-router'
import FlowerItemDescription from '@/components/FlowerItemDescription.vue'
import FlowerItemImage from '@/components/FlowerItemImage.vue'
import IconBackButton from '@/components/icons/IconBackButton.vue'

const dataStore = useDataStore()
const route = useRoute()
const router = useRouter()

// onCreated
dataStore.fetchDataByID(route.params?.id)
</script>
