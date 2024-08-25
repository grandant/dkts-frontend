<script setup lang="ts">
const { data: highlights } = useNuxtData("highlights");
// const { data: images } = useNuxtData("highlightImages");

const userScreenOrientation = useState("userScreenOrientation");
const pageLoaded = ref(false);

onMounted(() => {
  pageLoaded.value = true;
  // watchEffect(() => {
  //   console.log(userScreenOrientation.value);
  // });
});
</script>

<template lang="html">
  <div class="row d-flex justify-content-center position-relative text-bg-dark z-0">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :grabCursor="true"
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
          <NuxtLinkLocale class="" :to="`/events/plays/${highlight.slug}`">
            <NuxtImg
              v-if="userScreenOrientation == 'portrait-primary' && pageLoaded"
              :provider="setProvider()"
              format="webp"
              :src="setMediaUrl(`/media/plays/${highlight.slug}/poster.jpg`)"
              :alt="`${highlight.name} - Poster`"
              class="img-fluid object-fit-cover portrait"
              sizes="150px sm:90vw md:20vw"
              :placeholder="[1]"
            />
          </NuxtLinkLocale>
          <NuxtLinkLocale class="landscape gallery-slide" :to="`/events/plays/${highlight.slug}`">
            <NuxtImg
              v-if="userScreenOrientation == 'landscape-primary' && pageLoaded"
              :provider="setProvider()"
              format="webp"
              :src="setMediaUrl(`/media/plays/${highlight.slug}/cover.jpg`)"
              :alt="`${highlight.name} - Poster`"
              class="img-fluid object-fit-cover"
              sizes="800px lg:80vw"
              :placeholder="[19]"
            />
          </NuxtLinkLocale>
        </div>
        <div class="swiper-lazy-preloader"></div>
      </SwiperSlide>
    </Swiper>
  </div>
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

.portrait {
  width: 100vw;
  height: auto;
}

a,
.landscape {
  width: auto;
  height: 100%;
}

#textCol {
  margin-top: 30%;
  mix-blend-mode: difference;
}
</style>
