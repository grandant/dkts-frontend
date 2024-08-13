<script setup lang="ts">
const { data: highlights } = useNuxtData("highlights");
const { data: images } = useNuxtData("highlightImages");

onMounted(() => {
  // watchEffect(() => {
  //   console.log(images.value.covers);
  //
  // })
});
</script>

<template lang="html">
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :pagination="{
      enabled: true,
      type: 'bullets',
    }"
  >
    <SwiperSlide v-for="highlight in highlights" :key="highlight">
      <div id="imageContainer" class="d-flex flex-column align-items-center">
        <NuxtImg
          format="webp"
          :src="`/media/plays/${highlight.slug}/cover.jpg`"
          :alt="`${highlight.name} - Poster`"
          class="img-fluid object-fit-contain"
          :width="images.covers[highlight.slug][0]"
          :height="images.covers[highlight.slug][1]"
          sizes="800px lg:840px xl:1040px"
          :placeholder="[19]"
          loading="lazy"
        />
      </div>
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="css" scoped>
.swiper {
  --swiper-pagination-color: whitesmoke;
  --swiper-pagination-left: 180px;
  --swiper-pagination-right: auto;
  --swiper-pagination-bottom: 80px;
  --swiper-pagination-top: auto;
}

.swiper-slide {
  /* max-width: 100vw; */
  /* cursor: pointer; */
}

#imageContainer {
  height: 70vh;
}

.img-fluid {
  width: auto;
  height: 100%;
}

#textCol {
  margin-top: 30%;
  mix-blend-mode: difference;
}
</style>
