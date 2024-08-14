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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-home"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
                    />
                  </svg>
                </div>
              </router-link>

              <template v-if="route.name !== 'home'">
                <span class="px-3" style="margin-top: -2px">/</span>
                <span style="margin-top: -2px">{{ route.name }}</span>
              </template>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'

const { mobile } = useDisplay()
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
