<script setup lang="ts">
const route = useRoute();
// const isLoaded = ref(false);

const { data: actor } = await useFetch(setApiUrl(`/actors/${route.params.nickname}`), {
  key: "actorData",
  headers: {
    "X-User-Locale": useState("userLocale"),
    "X-User-Timezone": useState("userTimezone"),
  },
  // watch: [isLoaded],
});

const { data: actorMedia } = await useFetch(setApiUrl(`/media/actor-media/${route.params.nickname}`), {
  key: "actorMedia",
  // watch: [isLoaded],
});

const userDevice = useState("userDevice");
const totalVideos = actorMedia.value.details["total_videos"];
const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img(
    setMediaUrl(`/media/actors/${actor.value.nickname}/profile.jpg`),
    { format: "webp", quality: 1, width: 40, blur: 5 },
    { provider: setProvider() },
  );

  return { backgroundImage: `url('${imgUrl}')` };
});

onMounted(() => {
  // console.log(backgroundStyles.value);
});
</script>

<template lang="html">
  <div class="mb-5">
    <!-- Mobile layout -->
    <div v-if="userDevice.isMobile">
      <div class="container-fluid" :style="backgroundStyles">
        <div class="container">
          <ActorProfileRow />
        </div>
      </div>
      <div class="container">
        <ActorProfileMobileGallery :totalVideos="actorMedia.details.total_videos" />
        <ActorBioRow />
      </div>
      <div class="container px-3">
        <div class="row row-cols-auto text-light rounded-5 bg-gray-blurred gradient-border mt-4 mt-md-5 ps-3">
          <ActorDetailsRow />
        </div>
      </div>
    </div>
    <!-- Desktop layout -->
    <div v-if="userDevice.isDesktopOrTablet">
      <div class="container-fluid" :style="backgroundStyles">
        <div class="container">
          <ActorProfileRow />
          <div class="container">
            <ActorBioRow />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-auto text-light rounded-5 bg-gray-blurred gradient-border mt-3 mt-md-5 px-5">
          <ActorDetailsRow />
        </div>
      </div>
    </div>
    <ActorProfileVideoGallery v-if="totalVideos > 0" />
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
