<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheMain from '@/components/TheMain.vue';
</script>

<template>
  <v-app>
    <TheHeader />
    <TheMain />
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.custom-name {
  font-family: 'Pacifico', cursive;
  font-weight: 600;
  font-style: normal;
  font-optical-sizing: auto;
}
</style>
