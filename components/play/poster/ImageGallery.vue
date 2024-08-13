<script setup lang="ts">
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const route = useRoute();
const { data: play } = useNuxtData("playData");
const { data: playMedia } = useNuxtData("playMedia");

// TODO: The image gallery can be made with useDynamicGallery composable now

const img = useImage();
const gallery = ref(null);
const lightbox = ref(null);

const playPhotos = computed(() => {
  return (playMedia.value.play_photos || []).map((photo) => {
    return img(
      setMediaUrl(`/media/plays/${play.value.slug}/photos/${photo}`),
      { format: "webp", quality: 90 },
      { provider: setProvider() },
    );
  });
});

const playPhotosThumbs = computed(() => {
  return (playMedia.value.play_photos || []).map((photo) => {
    return img(
      setMediaUrl(`/media/plays/${play.value.slug}/photos/${photo}`),
      { format: "webp", quality: 50, width: 100 },
      { provider: setProvider() },
    );
  });
});

const dynamicPhotos = playPhotos.value.map((photo, index) => ({
  src: photo,
  thumb: playPhotosThumbs.value[index],
  subHtml: `${getTranslation(play.value, "name")} - ${photo.split("/").pop()}</p>`,
}));

const openGallery = () => {
  if (lightbox.value) {
    lightbox.value.openGallery(0);
  }
};

onMounted(() => {
  lightbox.value = lightGallery(gallery.value, {
    dynamic: true,
    allowMediaOverlap: true,
    toggleThumb: true,
    dynamicEl: dynamicPhotos,
    plugins: [lgThumbnail, lgZoom],
  });
});
</script>

<template lang="html">
  <span
    ref="gallery"
    v-if="playPhotos.length"
    @click="openGallery"
    type="button"
    :class="{ 'stretched-link': !$device.isMobile }"
  >
    {{ playMedia.details.total_images }} Photos
  </span>
  <span v-else>No Photos</span>
</template>

<style lang="css" scoped></style>
