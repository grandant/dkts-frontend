<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: play } = useNuxtData("playData");
const userDevice = useState("userDevice");

onMounted(() => {
  // console.log(play.value.entase_data);
});
</script>

<template lang="html">
  <div class="row row-cols-auto align-items-center mt-4 mt-md-5">
    <NuxtImg
      v-if="userDevice.isMobile"
      format="webp"
      :provider="setProvider()"
      :src="setMediaUrl(`/media/plays/${play.slug}/poster.jpg`)"
      :alt="`${play.name} - Poster`"
      id="posterImage"
      class="img-fluid col-4"
      sizes="130px"
    />
    <div :class="{ 'line-clamp-small': userDevice.isMobile }" class="col-8 col-md-8">
      <p v-for="p in getTranslation(play, 'short_description').split('\n')" class="text-light">
        {{ p }}
      </p>
    </div>
    <div v-if="play.entase_data" class="col-12 col-md-4 text-center text-md-end mt-4 mt-md-0">
      <TicketButton :eventID="play.entase_data?.[0]?.id" class="mb-3" color="primary">
        <template #text> {{ translations.events.ticket }} </template>
      </TicketButton>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
