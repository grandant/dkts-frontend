<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: play } = useNuxtData("playData");
const { data: playMedia } = useNuxtData("playMedia");
const hasTrailer = computed(() => playMedia.value.videos["trailer"] !== undefined);
const totalVideos = playMedia.value.details["total_videos"];

const userDevice = useState("userDevice");
const img = useImage();

const videoPoster = computed(() => {
  const imgUrl = img(
    setMediaUrl(`/media/plays/${play.value.slug}/cover.jpg`),
    { format: "webp", width: 650, quality: 50 },
    { provider: setProvider() },
  );

  return imgUrl;
});

onMounted(() => {
  // console.log(hasVideos);
});
</script>

<template lang="html">
  <div class="row row-cols-1 text-light">
    <PlayPosterMobileTitle />
    <PlayPosterDesktopTitle />
  </div>
  <div class="row rol-cols-auto justify-content-center mt-5">
    <div v-if="userDevice.isDesktopOrTablet" class="col-3 d-none d-md-block gallery-col">
      <NuxtImg
        format="webp"
        :provider="setProvider()"
        :src="setMediaUrl(`/media/plays/${play.slug}/poster.jpg`)"
        :alt="`${play.name} - Poster`"
        id="posterImage"
        class="img-fluid object-fit-cover h-100"
        sizes="150px md:150px lg:220px xl:150px xxl:320px"
      />
    </div>
    <div class="col-12 col-md-7 px-0 gallery-col">
      <div v-if="hasTrailer" class="row h-100">
        <video class="object-fit-cover px-0 px-md-2" controls preload="metadata" height="100%" :poster="videoPoster">
          <source :src="setMediaUrl(`/media/plays/${play.slug}/videos/trailer.mp4`, 'video')" type="video/mp4" />
        </video>
      </div>
      <div v-else class="row h-100">
        <NuxtImg
          format="webp"
          :provider="setProvider()"
          :src="setMediaUrl(`/media/plays/${play.slug}/cover.jpg`)"
          :alt="`${play.name} - Poster`"
          id="posterImage"
          class="img-fluid object-fit-cover p-0 px-md-2"
          sizes="250px md:50vw"
          :placeholder="[19, 10]"
        />
      </div>
    </div>
    <div class="col-12 col-md-2 d-flex flex-column justify-content-between text-light gallery-col">
      <PlayPosterDesktopGallery :totalVideos="totalVideos" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
