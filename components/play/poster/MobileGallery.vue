<script setup lang="ts">
defineProps<{
  totalVideos?: number;
}>();
</script>

<template lang="html">
  <div class="row row-cols-2 d-flex d-md-none justify-content-between text-light">
    <div id="videosCol" class="col d-flex d-md-none flex-column text-center justify-content-center bg-gray-blurred">
      <span v-if="totalVideos > 0" type="button" class="" data-bs-toggle="modal" data-bs-target="#videoGalleryModal">
        {{ totalVideos }} Videos
      </span>
      <span v-else>No Videos</span>
    </div>
    <div id="photosCol" class="col d-flex d-md-none flex-column text-center justify-content-center bg-gray-blurred">
      <PlayPosterImageGallery />
    </div>
  </div>
</template>

<style lang="css" scoped>
.bg-gray-blurred {
  /* --bs-bg-opacity: 0.5; */
}

.bg-gray-blurred:hover {
  --bs-bg-opacity: 0.25;
}

.row {
  height: 10vw;
}

#videosCol {
  border-radius: 0 0 0 10px;
  width: 49%;
}

#photosCol {
  border-radius: 0 0 10px 0;
  width: 49%;
}
</style>
