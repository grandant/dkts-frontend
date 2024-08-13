<script setup lang="ts">
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const route = useRoute();
const { data: actor } = useNuxtData("actorData");
const { data: actorMedia } = useNuxtData("actorMedia");

const img = useImage();
const gallery = ref(null);
const lightbox = ref(null);

const actorPhotos = computed(() => {
  return (actorMedia.value.actor_photos || []).map((photo) => {
    return img(
      setMediaUrl(`/media/actors/${actor.value.nickname}/photos/${photo}`),
      { format: "webp", quality: 90 },
      { provider: setProvider() },
    );
  });
});

const actorPhotosThumbs = computed(() => {
  return (actorMedia.value.actor_photos || []).map((photo) => {
    return img(
      setMediaUrl(`/media/actors/${actor.value.nickname}/photos/${photo}`),
      { format: "webp", quality: 50, width: 100 },
      { provider: setProvider() },
    );
  });
});

const dynamicPhotos = actorPhotos.value.map((photo, index) => ({
  src: photo,
  thumb: actorPhotosThumbs.value[index],
  subHtml: `${getTranslation(actor.value, "name")} - ${photo.split("/").pop()}</p>`,
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

<template>
  <span
    ref="gallery"
    v-if="actorPhotos.length"
    @click="openGallery"
    type="button"
    :class="{ 'stretched-link': !$device.isMobile }"
  >
    {{ actorMedia.details.total_images }} Photos
  </span>
  <span v-else>No Photos</span>
</template>

<style lang="css" scoped></style>
