<script setup>
import { useDataStore } from '@/stores/data.js';
import { useDisplay } from 'vuetify';
import { useRoute, useRouter } from 'vue-router';

import FlowerItemDescription from '@/components/FlowerItemDetailsDescription.vue';
import FlowerItemImage from '@/components/FlowerItemDetailsImage.vue';
import IconBackButton from '@/components/icons/IconBackButton.vue';
import IconHome from '@/components/icons/IconHome.vue';

const { xs } = useDisplay();
const dataStore = useDataStore();
const route = useRoute();
const router = useRouter();

// onCreated
dataStore.fetchDataByID(route.params?.id);
</script>

<template>
  <section class="mt-10" style="overflow-x: hidden">
    <v-container>
      <v-row class="justify-start align-baseline">
        <template v-if="xs">
          <v-col cols="auto">
            <div class="d-flex justify-start">
              <router-link to="/" exact>
                <IconHome fill-color="primary" />
              </router-link>

              <template v-if="route.name !== 'home'">
                <span class="px-3" style="margin-top: -2px">/</span>
                <span style="margin-top: -2px">{{
                  dataStore.flowerSelected?.name ?? route.name
                }}</span>
              </template>
            </div>
          </v-col>
        </template>

        <v-spacer />

        <v-col cols="auto">
          <v-btn id="back-button" variant="outlined" @click="router.push({ name: 'home' })">
            <IconBackButton />
            Volver
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="justify-center align-center mt-10">
        <v-col cols="12">
          <v-row class="justify-center align-start">
            <v-col cols="12" sm="auto">
              <FlowerItemImage />
            </v-col>

            <v-col cols="12" sm="auto" class="bg-white rounded-xl">
              <FlowerItemDescription />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
