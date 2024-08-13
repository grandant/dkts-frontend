<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: play } = useNuxtData("playData");

const actorNames = computed(() => {
  return play.value.actors.map((actor) => getTranslation(actor, "name")).join(", ");
});

const showCast = ref(false);

onMounted(() => {
  // console.log(actorNames.value);
});
</script>

<template lang="html">
  <div class="row row-cols-auto text-light rounded-5 bg-gray-blurred gradient-border mt-4 mt-md-5">
    <div class="col-12 col-md-8 p-3 px-md-5 mb-4">
      <div class="row row-cols-2 row-gap-3">
        <div class="col">
          <div class="fw-bold fs-4">{{ translations.events.genre }}:</div>
          {{ getTranslation(play, "genre") }}
        </div>
        <div class="col">
          <div class="fw-bold fs-4">{{ translations.events.scenographer }}:</div>
          {{ getTranslation(play, "scenographer") }}
        </div>
        <div class="col">
          <div class="fw-bold fs-4">{{ translations.events.director }}:</div>
          {{ getTranslation(play, "director") }}
        </div>
        <div class="col">
          <div class="col-12 col-lg-9">
            <div class="fw-bold fs-4">{{ translations.events.dkts }}:</div>
            {{ actorNames }}
          </div>
        </div>
      </div>
    </div>
    <div
      id="learnMoreCol"
      class="col-12 col-md-4 d-flex flex-column justify-content-center text-center mb-3 mb-md-0"
      style="--bs-border-opacity: 0.2"
    >
      <div>
        <StandardButton @click="showCast = !showCast" :link="`/events/plays/${play.slug}`" color="darker">
          <template #text> {{ translations.events.more }} </template>
        </StandardButton>
      </div>
    </div>
    <div v-if="showCast" class="col-12 border-top border-light mb-5" style="--bs-border-opacity: 0.2">
      <PlayDetailsCastSlider />
    </div>
  </div>
</template>

<style lang="css" scoped>
.router-link-active {
  font-weight: normal;
}
</style>
