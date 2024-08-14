<template>
  <header class="mt-5 bg-secondary">
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="12" lg="11">
          <v-row class="px-5 justify-start align-center" dense>
            <v-col cols="auto">
              <template v-if="mobile">
                <h2 class="custom-name" @click="onLogoClick">Floristería Dulces Pétalos</h2>
              </template>
              <template v-else>
                <h1 class="custom-name" @click="onLogoClick">Floristería Dulces Pétalos</h1>
              </template>
            </v-col>

            <v-spacer />

            <v-col cols="auto" class="d-flex justify-center">
              <router-link to="/" exact>
                <div class="d-flex">
                  <IconHome />
                </div>
              </router-link>

              <template v-if="route.name !== 'home'">
                <span class="px-3" style="margin-top: -2px">/</span>
                <span style="margin-top: -2px">{{
                  dataStore.flowerSelected?.name ?? route.name
                }}</span>
              </template>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { useDataStore } from '@/stores/data.js'
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'
import IconHome from '@/components/icons/IconHome.vue'

const { mobile } = useDisplay()
const dataStore = useDataStore()
const route = useRoute()
const router = useRouter()

function onLogoClick() {
  if (route.name !== 'home') router.push({ name: 'home' })
}
</script>

<style scoped>
.custom-name {
  font-weight: bold;
}
</style>
