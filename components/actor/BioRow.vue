<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actor } = useNuxtData("actorData");
const userDevice = useState("userDevice");
const showPlays = ref(false);

onMounted(() => {
  //
});
</script>

<template lang="html">
  <div class="row row-cols-auto align-items-center mt-4">
    <NuxtImg
      v-if="userDevice.isMobile"
      format="webp"
      :provider="setProvider()"
      :src="setMediaUrl(`/media/actors/${actor.nickname}/profile.jpg`)"
      :alt="`${actor.name} - Profile`"
      class="img-fluid col-4"
      sizes="130px"
    />
    <div :class="{ 'line-clamp-small': userDevice.isMobile }" class="col-8">
      <p v-for="p in getTranslation(actor, 'short_bio').split('\n')" class="text-light">
        {{ p }}
      </p>
    </div>
    <div id="learnMoreCol" class="col-3 d-none d-md-flex flex-column justify-content-center text-end">
      <div>
        <StandardButton v-if="actor.plays" :link="`/about/actors/${actor.nickname}`" color="primary">
          <template #text> {{ translations.events.more }} </template>
        </StandardButton>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
