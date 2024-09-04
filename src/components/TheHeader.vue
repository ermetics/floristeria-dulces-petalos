<script setup>
import { computed } from 'vue';
import { useDataStore } from '@/stores/data.js';
import { useDisplay } from 'vuetify';
import { useRoute } from 'vue-router';

import IconHome from '@/components/icons/IconHome.vue';

const { mobile, xs } = useDisplay();
const dataStore = useDataStore();
const route = useRoute();

const headerFontSize = computed(() => (mobile.value ? '1.3rem' : '1.6rem'));
</script>

<template>
  <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random" dark>
    <template #image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <div class="pl-6 mb-n1">
      <router-link style="text-decoration: none" to="/" exact>
        <h1
          class="custom-name"
          :style="{
            'font-size': headerFontSize
          }"
        >
          Floristería Dulces Pétalos
        </h1>
      </router-link>
    </div>

    <template #append>
      <div v-if="!xs" class="pr-6 mb-n1 d-flex justify-end">
        <router-link to="/" exact>
          <IconHome />
        </router-link>

        <template v-if="route.name !== 'home'">
          <span class="px-3" style="margin-top: -2px">/</span>
          <span style="margin-top: -2px">{{ dataStore.flowerSelected?.name ?? route.name }}</span>
        </template>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped>
.custom-name {
  padding-left: 10px;
  font-weight: bold;
  color: white;
  text-decoration: none !important;
}
</style>
