<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <v-main class="bg-teal-lighten-5">
    <v-container fluid>
      <v-row class="justify-center align-center">
        <v-col cols="12" lg="11">
          <RouterView />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
