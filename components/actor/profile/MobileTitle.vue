<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actor } = useNuxtData("actorData");
</script>

<template lang="html">
  <div class="row row-cols-1 d-block d-md-none text-light">
    <div class="d-flex mt-4 mb-3">
      <h1 class="display-5 fw-bold">{{ getTranslation(actor, "name") }}</h1>
    </div>
    <!-- <div class="d-flex align-items-center">
      <StagePill :stage="play.stage">
        <template #stage>
          <div class="px-3 py-1 small-text">{{ getTranslation(play, "stage") }}</div>
        </template>
      </StagePill>
      <span class="ms-3 small-text">{{ play.oad.split("-")[0] }}</span>
      <span class="ms-3 small-text">{{ play.length }} {{ translations.events.minutes }}</span>
    </div> -->
  </div>
</template>

<style lang="css" scoped>
.small-text {
  font-size: small;
}
</style>
