<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        class="custom-flower bg-white rounded-lg"
        color="white"
        :class="isHovering ? 'elevation-4' : 'elevation-0'"
        v-bind="props"
        @click="$emit('click')"
      >
        <FlowerItemImage :imgUrl="imgUrl" />

        <v-card-text class="bg-white">
          <section class="d-flex flex-column justify-start align-start">
            <span class="text-subtitle-1">{{ name }}</span>
            <span class="text-caption text-grey">{{ binomialName }}</span>
            <span class="text-h6">{{ setPrice(price) }}</span>
          </section>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
import FlowerItemImage from '@/components/FlowerItemCardListImage.vue'

defineEmits(['click'])

defineProps({
  name: {
    type: String,
    required: true,
    default: 'Nombre común'
  },
  binomialName: {
    type: String,
    required: true,
    default: 'Nombre científico'
  },
  imgUrl: {
    type: String,
    required: true,
    default: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg'
  },
  price: {
    type: Number,
    required: false,
    default: 0
  }
})

function setPrice(price) {
  return String(price)?.replace('.', ',') + ' €'
}
</script>

<style scoped>
.custom-flower {
  transition: all 0.3s;
}

.custom-flower article:first-child {
  padding: 1rem 5px;
}

.custom-flower:hover {
  cursor: pointer;
  transform: scale3d(1.05, 1.05, 1);
  transition: all 0.6s;
}
</style>
