<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actor } = useNuxtData("actorData");
</script>

<template lang="html">
  <div class="row row-cols-1 d-none d-md-block text-light">
    <div class="d-flex justify-content-center mt-4 mb-3">
      <h1 class="display-5 fw-bold">{{ getTranslation(actor, "name") }}</h1>
    </div>
    <!-- <div class="d-flex justify-content-center align-items-center">
      <StagePill :stage="play.stage">
        <template #stage>
          <div class="px-4 py-1">{{ getTranslation(actor, "stage") }}</div>
        </template>
      </StagePill>
      <span class="ms-3">{{ play.oad.split("-")[0] }}</span>
      <span class="ms-3">{{ play.length }} {{ translations.events.minutes }}</span>
    </div> -->
  </div>
</template>

<style lang="css" scoped></style>
