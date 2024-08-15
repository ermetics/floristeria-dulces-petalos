<template>
  <v-app>
    <TheHeader />

    <v-main class="bg-teal-lighten-5">
      <v-container fluid>
        <v-row class="justify-center align-center">
          <v-col cols="12" lg="11">
            <RouterView />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+LA:wght@100..400&display=swap');

.custom-name {
  font-family: 'Playwrite DE LA', cursive;
  font-optical-sizing: auto;
}
</style>
