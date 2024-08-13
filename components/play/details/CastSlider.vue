<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: play } = useNuxtData("playData");

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
  <!-- Crew slider -->
  <div class="d-flex align-items-center fs-5 fw-bold mt-4">
    <Icon name="ph:line-vertical-bold" class="text-primary" />
    Production Team
  </div>
  <Swiper
    :modules="[SwiperNavigation]"
    slidesPerView="auto"
    :centeredSlidesBounds="true"
    :centerInsufficientSlides="false"
    :grabCursor="true"
  >
    <SwiperSlide v-for="(member, index) in play.crew" :key="member.nickname" class="m-2">
      <ActorCard :style="`width: ${currentSize}px`">
        <template #images>
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/profile.png`)"
            :alt="`Photo - ${member.name}`"
            class="card-img-top img-fluid rounded-top-4 p-2 gallery-slide"
            width="1000"
            height="1240"
            :sizes="imageSizes"
            loading="lazy"
          />
        </template>
        <template #name>
          {{ getTranslation(member, "name") }}
        </template>
        <template #role>
          {{ translations.events[member.role] }}
        </template>
      </ActorCard>
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
  <!-- Actors slider -->
  <div class="d-flex align-items-center fs-5 fw-bold mt-4">
    <Icon name="ph:line-vertical-bold" class="text-primary" />
    Cast
  </div>
  <Swiper
    :modules="[SwiperNavigation]"
    slidesPerView="auto"
    :centeredSlidesBounds="true"
    :centerInsufficientSlides="false"
    :grabCursor="true"
    :navigation="{
      enabled: true,
    }"
    class="cast-swiper"
  >
    <SwiperSlide v-for="(actor, index) in play.actors" :key="actor.nickname" class="m-2">
      <ActorCard
        :link="actor.nickname"
        buttonColor="primary"
        :buttonText="translations.events.more"
        :buttonPadding="2"
        :style="`width: ${currentSize}px`"
      >
        <template #images>
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/media/actors/${actor.nickname}/profile.jpg`)"
            :alt="`Photo - ${actor.name}`"
            class="card-img-top img-fluid rounded-top-4 p-2 gallery-slide"
            width="1000"
            height="1240"
            :sizes="imageSizes"
            loading="lazy"
          />
        </template>
        <template #name>
          {{ getTranslation(actor, "name") }}
        </template>
      </ActorCard>
      <div class="swiper-lazy-preloader"></div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="css" scoped>
.swiper-slide {
  max-width: min-content;
}

.cast-swiper {
  --swiper-navigation-size: 44px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 0px;
  --swiper-navigation-color: red;
}

.card-margin {
  /* padding-top: 29px; */
}
</style>
