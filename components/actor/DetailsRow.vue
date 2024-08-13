<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actor } = useNuxtData("actorData");

const userDevice = useState("userDevice");
const userDisplaySize = useState("userDisplaySize");
const currentSize = ref(userDevice.isMobile ? 150 : 250);
const imageSizes = "150px md:180px lg:250px";
const parsedSizes = parseImageSizes(imageSizes);

onMounted(() => {
  currentSize.value = parsedSizes[userDisplaySize.value];
});
</script>

<template lang="html">
  <!-- Plays slider -->
  <div class="d-flex align-items-center fs-5 fw-bold mt-4 mt-lg-5 mb-3 p-0">
    <Icon name="ph:line-vertical-bold" class="text-primary ms-n2" />
    <span class="text-light">Credits</span>
  </div>
  <Swiper
    :modules="[SwiperAutoplay]"
    slidesPerView="auto"
    spaceBetween="35"
    :centeredSlidesBounds="true"
    :centerInsufficientSlides="false"
    :grabCursor="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(play, index) in actor.plays" :key="play.slug">
      <div class="row row-cols-auto justify-content-between mx-0 stage-pill">
        <StagePill :stage="play.stage" :paddingX="1">
          <template #stage>
            {{ getTranslation(play, "stage") }}
          </template>
        </StagePill>
        <div class="col pe-0">
          {{ play.length }}
        </div>
      </div>
      <PlayCard
        :playLink="play.slug"
        buttonColor="primary"
        :buttonText="translations.events.more"
        :buttonPadding="2"
        :style="`width: ${currentSize}px`"
      >
        <template #images>
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/media/plays/${play.slug}/poster.jpg`)"
            :alt="`Photo - ${actor.name}`"
            class="img-fluid gallery-slide"
            width="1000"
            height="1240"
            :sizes="imageSizes"
            placeholder
          />
        </template>
        <template #name>
          {{ getTranslation(play, "name") }}
        </template>
      </PlayCard>
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="css" scoped>
@media (max-width: 767px) {
  .stage-pill {
    font-size: small;
  }
}

.stage-pill {
  --bs-bg-opacity: 1;
}

.swiper-slide {
  max-width: min-content;
}
</style>
