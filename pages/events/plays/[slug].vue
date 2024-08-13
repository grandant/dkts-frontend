<script setup lang="ts">
const route = useRoute();
const hasLoaded = ref(false);

const { data: play } = await useFetch(setApiUrl(`/plays/${route.params.slug}`), {
  key: "playData",
  headers: {
    "X-User-Locale": useState("userLocale"),
    "X-User-Timezone": useState("userTimezone"),
  },
  // watch: [hasLoaded],
});

const { data: playMedia } = await useFetch(setApiUrl(`/media/play-media/${route.params.slug}`), {
  key: "playMedia",
  // watch: [hasLoaded],
});

const userDevice = useState("userDevice");
const totalVideos = playMedia.value.details["total_videos"];
const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img(
    setMediaUrl(`/media/plays/${play.value.slug}/cover.jpg`),
    { format: "webp", quality: 1, width: 40, blur: 5 },
    { provider: setProvider() },
  );

  return { backgroundImage: `url('${imgUrl}')` };
});

onMounted(() => {
  // hasLoaded.value = true;
  // console.log(backgroundStyles.value);
});
</script>

<template lang="html">
  <div class="mb-5">
    <!-- Mobile layout -->
    <div v-if="userDevice.isMobile">
      <div class="container-fluid" :style="backgroundStyles">
        <div class="container">
          <PlayPosterRow />
        </div>
      </div>
      <div class="container">
        <PlayPosterMobileGallery :totalVideos="playMedia.details.total_videos" />
        <PlayDescriptionRow />
      </div>
      <div class="container px-3">
        <PlayDetailsRow />
      </div>
    </div>
    <!-- Desktop layout -->
    <div v-if="userDevice.isDesktopOrTablet">
      <div class="container-fluid" :style="backgroundStyles">
        <div class="container">
          <PlayPosterRow />
          <div class="container">
            <PlayDescriptionRow />
          </div>
        </div>
      </div>
      <div class="container">
        <PlayDetailsRow />
      </div>
    </div>
    <PlayPosterVideoGallery v-if="totalVideos > 0" />
  </div>
</template>

<style lang="css" scoped>
.container-fluid {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: darken;
}
</style>
