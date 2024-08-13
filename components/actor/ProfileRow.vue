<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actor } = useNuxtData("actorData");
const { data: actorMedia } = useNuxtData("actorMedia");
const hasVideos = actorMedia.value.details["total_videos"] > 0;
const totalVideos = actorMedia.value.details["total_videos"];

const userDevice = useState("userDevice");
const img = useImage();

// Video poster might be used at some point
// const videoPoster = computed(() => {
//   const imgUrl = img(
//     setMediaUrl(`/media/actors/${actor.value.nickname}/signature.png`),
//     { format: "webp", width: 650, quality: 50 },
//     { provider: setProvider() },
//   );
//
//   return imgUrl;
// });

onMounted(() => {
  // console.log(actorMedia.value);
});
</script>

<template lang="html">
  <div class="row row-cols-1 text-light">
    <ActorProfileMobileTitle />
    <ActorProfileDesktopTitle />
  </div>
  <div class="row rol-cols-auto justify-content-center mt-4">
    <div v-if="userDevice.isDesktopOrTablet" class="col-3 d-none d-md-block gallery-col">
      <NuxtImg
        format="webp"
        :provider="setProvider()"
        :src="setMediaUrl(`/media/actors/${actor.nickname}/profile.jpg`)"
        :alt="`${actor.nickname} - Profile`"
        class="img-fluid object-fit-cover h-100"
        sizes="150px md:150px lg:220px xl:150px xxl:320px"
      />
    </div>
    <div class="col-12 col-md-7 px-0 gallery-col">
      <div v-if="hasVideos" class="row h-100">
        <video class="object-fit-cover px-0 px-md-2" controls preload="metadata" height="100%" poster="">
          <source :src="setMediaUrl(`/media/actors/${actor.nickname}/videos/intro.mp4`, 'video')" type="video/mp4" />
        </video>
      </div>
      <div v-else class="row h-100">
        <NuxtImg
          format="webp"
          :provider="setProvider()"
          :src="setMediaUrl(`/media/actors/${actor.nickname}/signature.png`)"
          :alt="`${actor.name} - Signature`"
          class="img-fluid object-fit-cover p-0 px-md-2"
          sizes="250px md:50vw"
          :placeholder="[19, 10]"
        />
      </div>
    </div>
    <div class="col-12 col-md-2 d-flex flex-column justify-content-between text-light gallery-col">
      <ActorProfileDesktopGallery :totalVideos="totalVideos" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
