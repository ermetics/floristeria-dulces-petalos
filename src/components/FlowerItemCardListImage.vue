<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="image-container" :style="`background-image: url(${imgUrl})`">
    <svg class="image-waves-layer-b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="0.5"
        d="M0,0L60,21.3C120,43,240,85,360,101.3C480,117,600,107,720,112C840,117,960,139,1080,170.7C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
    <svg class="image-waves-layer-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#fff"
        fill-opacity="0.9"
        d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,90.7C840,53,960,43,1080,58.7C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.image-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 250px;
  overflow: hidden;
}

.image-waves-layer-b {
  position: absolute;
  bottom: 108px;
}

.image-waves-layer-f {
  position: absolute;
  bottom: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
}
</style>
