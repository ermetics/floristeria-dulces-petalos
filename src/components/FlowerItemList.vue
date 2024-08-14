<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <section
        v-bind="props"
        class="rounded-lg custom-flower"
        :class="isHovering ? 'elevation-8' : 'elevation-0'"
        :style="`background-image: url(${imgUrl})`"
        @click="$emit('click')"
      >
        <article class="d-flex flex-column justify-center align-center">
          <span class="text-h5 text-white font-weight-bold custom-name">{{ name }}</span>
          <span class="text-caption text-grey font-weight-bold">{{ binomialName }}</span>
        </article>

        <article class="d-flex flex-column justify-end align-center">
          <span class="mt-n5 pb-5 text-h5 text-white font-weight-bold" style="opacity: 0.7"
            >{{ price }} €</span
          >
        </article>
      </section>
    </template>
  </v-hover>
</template>

<script setup>
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
    required: false,
    default: 'https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg'
  },
  price: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+DE+LA:wght@100..400&display=swap');

.custom-flower {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #00000090;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  height: '15rem';
  max-height: '250px';
  transition: all 0.3s;
}

.custom-flower article:first-child {
  padding: 5rem 5px;
}

.custom-flower:hover {
  cursor: pointer;
  transform: scale3d(1.1, 1.1, 1);
  background-color: #00000050;
  transition: all 0.6s;
  position: relative;
}

.custom-name {
  font-family: 'Playwrite DE LA', cursive;
  font-optical-sizing: auto;
}
</style>
