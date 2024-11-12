<script setup lang="ts">
const { data: commonImages } = useNuxtData("commonImages");
</script>

<template lang="html">
  <div class="row justify-content-center px-2">
    <span class="text-light">
      <slot name="heading" />
    </span>
    <div class="row row-cols-auto d-flex justify-content-center">
      <div
        v-for="img in commonImages.sponsors"
        class="col-4 col-md-2 d-flex flex-column justify-content-center align-items-center"
      >
        <NuxtImg
          format="webp"
          :provider="setProvider()"
          :src="setMediaUrl(`/sponsors/${img}`)"
          :alt="`${img} - Logo`"
          class="img-fluid mx-2 my-3"
          sizes="125px lg:20vw"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.img-fluid {
  /* max-width: 100%; */
  width: auto;
  max-height: 65px;
}
</style>
