<script setup lang="ts">
const { data: actor } = useNuxtData("actorData");
const { data: actorMedia } = useNuxtData("actorMedia");
</script>

<template lang="html">
  <div class="modal fade" id="videoGalleryModal" tabindex="-1" aria-labelledby="videoGallery" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-light fs-5" id="videoGallery">{{ getTranslation(actor, "name") }} - Videos</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <div class="row">
            <div v-for="(video, name) in actorMedia.videos" :key="name" class="col col-12 col-md-4">
              <figure class="figure">
                <video class="video-element object-fit-cover w-100" controls preload="metadata">
                  <source
                    :src="setMediaUrl(`/media/actors/${actor.nickname}/videos/${video}`, 'video')"
                    type="video/mp4"
                  />
                </video>
                <figcaption class="figure-caption text-end">{{ getTranslation(actor, "name") }}: {{ name }}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.video-element {
  /* width: 100%; */
  /* height: auto; */
  /* object-fit: cover; */
}
</style>
