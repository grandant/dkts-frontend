<script setup lang="ts">
defineProps<{
  totalVideos?: number;
}>();
</script>

<template lang="html">
  <div
    id="videosCol"
    class="col-12 d-none d-md-flex flex-column text-center justify-content-center bg-gray-blurred gradient-border"
  >
    <span
      v-if="totalVideos > 0"
      type="button"
      class="stretched-link"
      data-bs-toggle="modal"
      data-bs-target="#videoGalleryModal"
    >
      {{ totalVideos }} Videos
    </span>
    <span v-else>No Videos</span>
  </div>
  <div
    id="photosCol"
    class="col-12 d-none d-md-flex flex-column text-center justify-content-center bg-gray-blurred gradient-border"
  >
    <ActorProfileImageGallery />
  </div>
</template>

<style lang="css" scoped>
#videosCol.gradient-border {
  --border-radius-top-left: 0px;
  --border-radius-bottom-left: 0px;
}

#photosCol.gradient-border {
  --border-radius-top-left: 0px;
  --border-radius-top-right: 0px;
  --border-radius-bottom-left: 0px;
}

.bg-gray-blurred {
  --bs-bg-opacity: 0.15;
}

.bg-gray-blurred:hover {
  --bs-bg-opacity: 0.25;
}

#videosCol {
  border-radius: 0 30px 0 0;
  height: 49%;
}

#photosCol {
  border-radius: 0 0 30px 0;
  height: 49%;
}
</style>
