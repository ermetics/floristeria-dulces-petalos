<template>
  <header class="custom-header">
    <v-container>
      <v-row class="justify-center align-center">
        <v-col cols="12" lg="11">
          <v-row class="px-5 justify-start align-center" dense>
            <v-col cols="auto">
              <router-link class="d-flex justify-center" style="text-decoration: none" to="/" exact>
                <div class="mt-1"><IconHeader /></div>
                <h1
                  class="custom-name"
                  :style="{
                    'font-size': headerFontSize,
                    'padding-top': headerPaddingTop
                  }"
                >
                  Floristería Dulces Pétalos
                </h1>
              </router-link>
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
import { computed } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import IconHome from '@/components/icons/IconHome.vue'
import IconHeader from '@/components/icons/IconHeader.vue'

const { mobile } = useDisplay()
const dataStore = useDataStore()
const route = useRoute()

const headerFontSize = computed(() => (mobile.value ? '1.15rem' : '1.5rem'))
const headerPaddingTop = computed(() => (mobile.value ? '5px' : '0'))
</script>

<style scoped>
.custom-header {
  background: linear-gradient(90deg, #3c7519, #488c1e, rgba(85, 163, 36, 1));
  color: white;
}
.custom-name {
  padding-left: 10px;
  font-weight: bold;
  color: white;
  text-decoration: none !important;
}
</style>
