<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template lang="html">
  <div v-if="text" class="row justify-content-center text-light mx-0">
    <div class="page-title pb-3">
      <h1>{{ text }}</h1>
    </div>
    <hr class="" />
  </div>
</template>

<style lang="css" scoped>
.page-title {
  max-width: max-content;
  position: relative;
}

.page-title::before {
  content: "";
  position: absolute;
  bottom: -3px; /* hr is 2px tall + 4px from here = 6; 6 / 2 = 3px */
  left: 25%;
  right: 25%;
  height: 4px;
  border-radius: 10px;
  box-shadow:
    rgba(255, 0, 0, 1) 0px 0px 0px 2px inset,
    0px 0px 12px 5px rgba(255, 0, 0, 0.3);
}

/* .page-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 15%;
  right: 15%;
  height: 15px;
  border-radius: 10px;
  box-shadow: rgba(255, 0, 0, 0.1) 0px -15px 15px -5px inset;
} */
</style>
